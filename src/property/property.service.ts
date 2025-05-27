// import { ForbiddenException, Injectable } from '@nestjs/common';
// // import { PrismaService } from 'src/prisma/prisma.service';
// import { PrismaService } from '../prisma/prisma.service';
// import { CreatePropertykDto, EditBookmarkDto } from './dto';

// @Injectable()
// export class PropertyService {
//   constructor(private prisma: PrismaService) {}

//   getProperties() {
//     return this.prisma.property.findMany({});
//   }

//   // getBookmarkById(userId: string, bookmarkId: string) {
//   //   return this.prisma.bookmark.findFirst({
//   //     where: {
//   //       id: bookmarkId,
//   //       userId,
//   //     },
//   //   });
//   // }

//   getPropertyById(propertyId: string) {
//     return this.prisma.property.findFirst({
//       where: {
//         id: propertyId,
//       },
//       include: {
//         owner: true,
//       },
//     });
//   }

//   // async createBookmark(userId: string, dto: CreateBookmarkDto) {
//   //   const bookmark = await this.prisma.bookmark.create({
//   //     data: {
//   //       userId,
//   //       ...dto,
//   //     },
//   //   });
//   //   return bookmark;
//   // }

//   async createProperty(userId: string, dto: CreatePropertykDto) {
//     const property = await this.prisma.property.create({
//       data: {
//         ownerId: userId,
//         address: dto.address,
//         title: dto.title,
//         ...dto,
//       },
//     });
//     return property;
//   }

//   async editBookmarkById(
//     userId: string,
//     bookmarkId: string,
//     dto: EditBookmarkDto,
//   ) {
//     // Get the bookmark by id
//     const bookmark = await this.prisma.bookmark.findUnique({
//       where: {
//         id: bookmarkId,
//       },
//     });
//     // check if user owns the bookmark
//     if (!bookmark || bookmark.userId !== userId)
//       throw new ForbiddenException('Access to resources denied');

//     return this.prisma.bookmark.update({
//       where: {
//         id: bookmarkId,
//       },
//       data: {
//         ...dto,
//       },
//     });
//   }

//   async deleteBookmarkById(userId: string, bookmarkId: string) {
//     const bookmark = await this.prisma.bookmark.findUnique({
//       where: {
//         id: bookmarkId,
//       },
//     });
//     // check if user owns the bookmark

//     if (!bookmark || bookmark.userId !== userId)
//       throw new ForbiddenException('Access to resources denied');

//     await this.prisma.bookmark.delete({
//       where: {
//         id: bookmarkId,
//       },
//     });
//   }
// }

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PropertyDto } from './dto/property.dto';

@Injectable()
export class PropertyService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: PropertyDto) {
    return this.prisma.property.create({
      data: {
        ...dto,
        amenities: dto.amenities ? JSON.stringify(dto.amenities) : undefined,
        features: dto.features ? JSON.stringify(dto.features) : undefined,
      },
    });
  }

  async findAll() {
    return this.prisma.property.findMany();
  }

  async findOne(id: string) {
    console.log('property goes here', id);

    const property = await this.prisma.property.findUnique({ where: { id } });
    console.log('property', property);
    if (!property)
      throw new NotFoundException(`Property with ID '${id}' not found`);
    return property;
  }

  async update(id: string, dto: PropertyDto) {
    const exists = await this.prisma.property.findUnique({ where: { id } });
    if (!exists) throw new NotFoundException('Property not found');

    return this.prisma.property.update({
      where: { id },
      data: {
        ...dto,
        amenities: dto.amenities ? JSON.stringify(dto.amenities) : undefined,
        features: dto.features ? JSON.stringify(dto.features) : undefined,
      },
    });
  }

  async remove(id: string) {
    const exists = await this.prisma.property.findUnique({ where: { id } });
    if (!exists) throw new NotFoundException('Property not found');

    return this.prisma.property.delete({ where: { id } });
  }
}
