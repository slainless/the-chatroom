import { IsString } from 'class-validator'

export namespace Model {
  export class User {
    @IsString() user_id: string
    @IsString() token: string
  }

  export class Create extends User {}

  // export class Query extends User {}
}
