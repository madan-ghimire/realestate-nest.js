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
