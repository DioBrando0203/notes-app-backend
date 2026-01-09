import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}

  async findAll(archived: boolean = false, categoryId?: number) {
    const where: any = { archived };

    if (categoryId) {
      where.categories = {
        some: { id: categoryId }
      };
    }

    return this.prisma.note.findMany({
      where,
      include: { categories: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const note = await this.prisma.note.findUnique({
      where: { id },
      include: { categories: true },
    });

    if (!note) {
      throw new NotFoundException(`Note with ID ${id} not found`);
    }

    return note;
  }

  async create(createNoteDto: CreateNoteDto) {
    const { categoryIds, ...data } = createNoteDto;

    return this.prisma.note.create({
      data: {
        ...data,
        categories: categoryIds
          ? { connect: categoryIds.map((id) => ({ id })) }
          : undefined,
      },
      include: { categories: true },
    });
  }

  async update(id: number, updateNoteDto: UpdateNoteDto) {
    await this.findOne(id);

    const { categoryIds, ...data } = updateNoteDto;

    return this.prisma.note.update({
      where: { id },
      data: {
        ...data,
        categories: categoryIds
          ? { set: categoryIds.map((id) => ({ id })) }
          : undefined,
      },
      include: { categories: true },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.note.delete({
      where: { id },
    });
  }

  async toggleArchive(id: number) {
    const note = await this.findOne(id);

    return this.prisma.note.update({
      where: { id },
      data: { archived: !note.archived },
      include: { categories: true },
    });
  }

  async addCategory(noteId: number, categoryId: number) {
    await this.findOne(noteId);

    return this.prisma.note.update({
      where: { id: noteId },
      data: {
        categories: { connect: { id: categoryId } },
      },
      include: { categories: true },
    });
  }

  async removeCategory(noteId: number, categoryId: number) {
    await this.findOne(noteId);

    return this.prisma.note.update({
      where: { id: noteId },
      data: {
        categories: { disconnect: { id: categoryId } },
      },
      include: { categories: true },
    });
  }
}
