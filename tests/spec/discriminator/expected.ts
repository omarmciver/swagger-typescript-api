/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type SimpleDiscriminator = SimpleObject | ComplexObject;

export interface SimpleObject {
  objectType: string;
}

export interface ComplexObject {
  objectType: string;
}

export enum BlockDTOEnum {
  Csv = "csv",
  File = "file",
  Kek = "kek",
}

export type BlockDTOWithEnum = BaseBlockDtoWithEnum &
  (
    | BaseBlockDtoWithEnumTypeMapping<BlockDTOEnum.Csv, CsvBlockWithEnumDTO>
    | BaseBlockDtoWithEnumTypeMapping<BlockDTOEnum.File, FileBlockWithEnumDTO>
  );

export type CsvBlockWithEnumDTO = BaseBlockDtoWithEnum & {
  type: BlockDTOEnum.Csv;
  text: string;
};

export type FileBlockWithEnumDTO = BaseBlockDtoWithEnum & {
  type: BlockDTOEnum.File;
  fileId: string;
};

export type BlockDTO = BaseBlockDto &
  (BaseBlockDtoTypeMapping<"csv", CsvBlockDTO> | BaseBlockDtoTypeMapping<"file", FileBlockDTO>);

export type CsvBlockDTO = BaseBlockDto & {
  /** @default "csv" */
  type: "csv";
  text: string;
};

export type FileBlockDTO = BaseBlockDto & {
  /** @default "file" */
  type: "file";
  fileId: string;
};

export type Pet = BasePet &
  (BasePetPetTypeMapping<"dog", Dog> | BasePetPetTypeMapping<"cat", Cat> | BasePetPetTypeMapping<"lizard", Lizard>);

export type PetOnlyDiscriminator =
  | ({
      pet_type: "dog";
    } & Dog)
  | ({
      pet_type: "cat";
    } & Cat)
  | ({
      pet_type: "lizard";
    } & Lizard);

export type Cat = BasePet & {
  name?: string;
};

export type Dog = BasePet & {
  bark?: string;
};

export type Lizard = BasePet & {
  lovesRocks?: boolean;
};

export enum PetEnum {
  Dog = "dog",
  Lizard = "lizard",
  Cat = "cat",
}

export type PetWithEnum = BasePetWithEnum &
  (
    | BasePetWithEnumPetTypeMapping<PetEnum.Dog, DogWithEnum>
    | BasePetWithEnumPetTypeMapping<PetEnum.Cat, CatWithEnum>
    | BasePetWithEnumPetTypeMapping<PetEnum.Lizard, LizardWithEnum>
  );

export type CatWithEnum = BasePetWithEnum & {
  name?: string;
};

export type DogWithEnum = BasePetWithEnum & {
  bark?: string;
};

export type LizardWithEnum = BasePetWithEnum & {
  lovesRocks?: boolean;
};

interface BaseBlockDtoWithEnum {
  title: string;
  type: BlockDTOEnum;
}

type BaseBlockDtoWithEnumTypeMapping<Key, Type> = {
  type: Key;
} & Type;

interface BaseBlockDto {
  title: string;
}

type BaseBlockDtoTypeMapping<Key, Type> = {
  type: Key;
} & Type;

interface BasePet {
  pet_type: string;
}

type BasePetPetTypeMapping<Key, Type> = {
  pet_type: Key;
} & Type;

interface BasePetWithEnum {
  pet_type: PetEnum;
}

type BasePetWithEnumPetTypeMapping<Key, Type> = {
  pet_type: Key;
} & Type;
