import { PrismaService } from '../prisma/prisma.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
export declare class NotesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(archived?: boolean, categoryId?: number): Promise<({
        categories: {
            id: number;
            name: string;
        }[];
    } & {
        id: number;
        createdAt: Date;
        title: string;
        content: string;
        archived: boolean;
        updatedAt: Date;
    })[]>;
    findOne(id: number): Promise<{
        categories: {
            id: number;
            name: string;
        }[];
    } & {
        id: number;
        createdAt: Date;
        title: string;
        content: string;
        archived: boolean;
        updatedAt: Date;
    }>;
    create(createNoteDto: CreateNoteDto): Promise<{
        categories: {
            id: number;
            name: string;
        }[];
    } & {
        id: number;
        createdAt: Date;
        title: string;
        content: string;
        archived: boolean;
        updatedAt: Date;
    }>;
    update(id: number, updateNoteDto: UpdateNoteDto): Promise<{
        categories: {
            id: number;
            name: string;
        }[];
    } & {
        id: number;
        createdAt: Date;
        title: string;
        content: string;
        archived: boolean;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        content: string;
        archived: boolean;
        updatedAt: Date;
    }>;
    toggleArchive(id: number): Promise<{
        categories: {
            id: number;
            name: string;
        }[];
    } & {
        id: number;
        createdAt: Date;
        title: string;
        content: string;
        archived: boolean;
        updatedAt: Date;
    }>;
    addCategory(noteId: number, categoryId: number): Promise<{
        categories: {
            id: number;
            name: string;
        }[];
    } & {
        id: number;
        createdAt: Date;
        title: string;
        content: string;
        archived: boolean;
        updatedAt: Date;
    }>;
    removeCategory(noteId: number, categoryId: number): Promise<{
        categories: {
            id: number;
            name: string;
        }[];
    } & {
        id: number;
        createdAt: Date;
        title: string;
        content: string;
        archived: boolean;
        updatedAt: Date;
    }>;
}
