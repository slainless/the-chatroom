import { IsNumber, IsString } from 'class-validator'

export namespace Model {
  export class Message {
    @IsNumber() id: number
    @IsString() room_id: string
    @IsString() body: string
    @IsString() created_at: string
    @IsString() updated_at: string
    @IsNumber() user_id: number
  }
}
