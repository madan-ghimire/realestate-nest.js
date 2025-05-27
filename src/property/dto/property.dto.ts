import {
  IsString,
  IsOptional,
  IsEnum,
  IsInt,
  IsNumber,
  IsBoolean,
  IsArray,
  IsUUID,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum PropertyType {
  RESIDENTIAL = 'RESIDENTIAL',
  COMMERCIAL = 'COMMERCIAL',
  LAND = 'LAND',
  INDUSTRIAL = 'INDUSTRIAL',
}

export enum PropertySubType {
  APARTMENT = 'APARTMENT',
  HOUSE = 'HOUSE',
  CONDO = 'CONDO',
  OFFICE = 'OFFICE',
}

export enum PropertyCondition {
  EXCELLENT = 'EXCELLENT',
  GOOD = 'GOOD',
  FAIR = 'FAIR',
  POOR = 'POOR',
}

export class PropertyDto {
  @ApiProperty({ description: 'Property title', example: 'Modern Family Home' })
  @IsString()
  title: string;

  @ApiPropertyOptional({
    description: 'Property description',
    example: 'A beautiful 4-bedroom house in a quiet neighborhood',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ enum: PropertyType, example: PropertyType.RESIDENTIAL })
  @IsEnum(PropertyType)
  propertyType: PropertyType;

  @ApiProperty({ enum: PropertySubType, example: PropertySubType.HOUSE })
  @IsEnum(PropertySubType)
  subType: PropertySubType;

  @ApiPropertyOptional({
    enum: PropertyCondition,
    example: PropertyCondition.GOOD,
  })
  @IsOptional()
  @IsEnum(PropertyCondition)
  condition?: PropertyCondition;

  @ApiPropertyOptional({
    description: 'Year the property was built',
    example: 2010,
  })
  @IsOptional()
  @IsInt()
  yearBuilt?: number;

  // Location
  @ApiProperty({ description: 'Street address', example: '123 Main St' })
  @IsString()
  address: string;

  @ApiProperty({ description: 'City', example: 'Los Angeles' })
  @IsString()
  city: string;

  @ApiProperty({ description: 'State', example: 'CA' })
  @IsString()
  state: string;

  @ApiProperty({ description: 'ZIP Code', example: '90001' })
  @IsString()
  zipCode: string;

  @ApiPropertyOptional({ description: 'Country', example: 'USA' })
  @IsOptional()
  @IsString()
  country?: string;

  @ApiPropertyOptional({ description: 'Latitude', example: 34.052235 })
  @IsOptional()
  @IsNumber()
  latitude?: number;

  @ApiPropertyOptional({ description: 'Longitude', example: -118.243683 })
  @IsOptional()
  @IsNumber()
  longitude?: number;

  @ApiPropertyOptional({
    description: 'Neighborhood',
    example: 'Beverly Hills',
  })
  @IsOptional()
  @IsString()
  neighborhood?: string;

  @ApiPropertyOptional({
    description: 'School district',
    example: 'Los Angeles Unified',
  })
  @IsOptional()
  @IsString()
  schoolDistrict?: string;

  // Property Details
  @ApiPropertyOptional({ description: 'Total area in sq ft', example: 3500 })
  @IsOptional()
  @IsNumber()
  totalArea?: number;

  @ApiPropertyOptional({ description: 'Living area in sq ft', example: 3000 })
  @IsOptional()
  @IsNumber()
  livingArea?: number;

  @ApiPropertyOptional({ description: 'Lot size in sq ft', example: 4000 })
  @IsOptional()
  @IsNumber()
  lotSize?: number;

  @ApiPropertyOptional({ description: 'Number of bedrooms', example: 4 })
  @IsOptional()
  @IsInt()
  bedrooms?: number;

  @ApiPropertyOptional({ description: 'Number of bathrooms', example: 2.5 })
  @IsOptional()
  @IsNumber()
  bathrooms?: number;

  @ApiPropertyOptional({ description: 'Half bathrooms', example: 1 })
  @IsOptional()
  @IsInt()
  halfBathrooms?: number;

  @ApiPropertyOptional({ description: 'Number of floors', example: 2 })
  @IsOptional()
  @IsInt()
  floors?: number;

  @ApiPropertyOptional({ description: 'Parking spaces', example: 2 })
  @IsOptional()
  @IsInt()
  parkingSpaces?: number;

  @ApiPropertyOptional({ description: 'Garage spaces', example: 1 })
  @IsOptional()
  @IsInt()
  garageSpaces?: number;

  // Building Features
  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  basement?: boolean;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  attic?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  balcony?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  patio?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  pool?: boolean;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  fireplace?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  garden?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  petFriendly?: boolean;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  furnished?: boolean;

  @ApiPropertyOptional({
    type: [String],
    example: ['Gym', 'Playground', 'Security Gate'],
  })
  @IsOptional()
  @IsArray()
  @Type(() => String)
  amenities?: string[];

  @ApiPropertyOptional({
    type: [String],
    example: ['Solar Panels', 'Smart Thermostat'],
  })
  @IsOptional()
  @IsArray()
  @Type(() => String)
  features?: string[];

  // Utilities
  @ApiPropertyOptional({ example: 'Central Heating' })
  @IsOptional()
  @IsString()
  heating?: string;

  @ApiPropertyOptional({ example: 'Central Air Conditioning' })
  @IsOptional()
  @IsString()
  cooling?: string;

  @ApiPropertyOptional({
    type: [String],
    example: ['Water', 'Electricity', 'Gas'],
  })
  @IsOptional()
  @IsArray()
  @Type(() => String)
  utilities?: string[];

  @ApiPropertyOptional({ example: '1 Gbps' })
  @IsOptional()
  @IsString()
  internetSpeed?: string;

  @ApiPropertyOptional({ example: 'A+' })
  @IsOptional()
  @IsString()
  energyRating?: string;

  // Financial
  @ApiPropertyOptional({ example: 3500.75 })
  @IsOptional()
  @IsNumber()
  propertyTax?: number;

  @ApiPropertyOptional({ example: 120.5 })
  @IsOptional()
  @IsNumber()
  hoaFees?: number;

  @ApiPropertyOptional({ example: 980.99 })
  @IsOptional()
  @IsNumber()
  insurance?: number;

  @ApiPropertyOptional({ example: 450.0 })
  @IsOptional()
  @IsNumber()
  maintenanceFee?: number;

  // Legal
  @ApiPropertyOptional({ example: 'Residential' })
  @IsOptional()
  @IsString()
  zoning?: string;

  @ApiPropertyOptional({ example: '987654321' })
  @IsOptional()
  @IsString()
  parcelNumber?: string;

  @ApiPropertyOptional({ example: 'No commercial use allowed' })
  @IsOptional()
  @IsString()
  deedRestrictions?: string;

  // Ownership
  @ApiPropertyOptional({
    description: 'Landlord UUID',
    example: 'b7c527a9-4c44-4fbb-9f1f-92f4b73914c6',
  })
  @IsOptional()
  @IsUUID()
  ownerId?: string;
}
