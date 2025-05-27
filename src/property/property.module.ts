// import { Module } from '@nestjs/common';
// import { BookmarkController } from './bookmark.controller';
// import { BookmarkService } from './bookmark.service';

// @Module({
//   controllers: [BookmarkController],
//   providers: [BookmarkService],
// })
// export class BookmarkModule {}

import { Module } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';
import { PrismaService } from '../prisma/prisma.service'; // Assuming PrismaService is in a shared module

@Module({
  controllers: [PropertyController],
  providers: [PropertyService, PrismaService],
})
export class PropertyModule {}
