import { UUID } from "crypto";

export interface Collaborator {
    id: UUID;
    name: string;
    enabled: boolean;
}

