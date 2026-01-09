import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    findAll(categoryId?: string): Promise<({
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
    findArchived(categoryId?: string): Promise<({
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
    addCategory(id: number, categoryId: number): Promise<{
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
    removeCategory(id: number, categoryId: number): Promise<{
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
