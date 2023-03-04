import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';

@ObjectType()
export class Post {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: true })
  content!: string | null;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  published!: boolean | null;

  // @Field(() => String, { nullable: true })
  // authorId!: string | null;
  //
  // @Field(() => User, { nullable: true })
  // author?: User | null;
}
