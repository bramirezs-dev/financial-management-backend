import { ApiProperty } from "@nestjs/swagger";


export class UserDTO {
    @ApiProperty()
    name:String;
    @ApiProperty({ required: false, default: true ,type:String})
    lastName:String;
}