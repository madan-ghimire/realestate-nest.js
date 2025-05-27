import { SetMetadata } from '@nestjs/common';
import { UserRole } from '@prisma/client'; // Adjust import based on your enum location

export const ROLES_KEY = 'roles';
export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);
