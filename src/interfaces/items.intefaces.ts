import { UUID } from "crypto";

export interface Items {
    id: UUID;
    name: string;
    enabled: boolean;
}

