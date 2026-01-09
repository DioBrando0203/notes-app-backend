"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let NotesService = class NotesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(archived = false, categoryId) {
        const where = { archived };
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
    async findOne(id) {
        const note = await this.prisma.note.findUnique({
            where: { id },
            include: { categories: true },
        });
        if (!note) {
            throw new common_1.NotFoundException(`Note with ID ${id} not found`);
        }
        return note;
    }
    async create(createNoteDto) {
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
    async update(id, updateNoteDto) {
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
    async remove(id) {
        await this.findOne(id);
        return this.prisma.note.delete({
            where: { id },
        });
    }
    async toggleArchive(id) {
        const note = await this.findOne(id);
        return this.prisma.note.update({
            where: { id },
            data: { archived: !note.archived },
            include: { categories: true },
        });
    }
    async addCategory(noteId, categoryId) {
        await this.findOne(noteId);
        return this.prisma.note.update({
            where: { id: noteId },
            data: {
                categories: { connect: { id: categoryId } },
            },
            include: { categories: true },
        });
    }
    async removeCategory(noteId, categoryId) {
        await this.findOne(noteId);
        return this.prisma.note.update({
            where: { id: noteId },
            data: {
                categories: { disconnect: { id: categoryId } },
            },
            include: { categories: true },
        });
    }
};
exports.NotesService = NotesService;
exports.NotesService = NotesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotesService);
//# sourceMappingURL=notes.service.js.map