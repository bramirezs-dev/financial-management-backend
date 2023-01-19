import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import  {UserDTO} from './user.dto'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Body() uno:UserDTO): string {
    return this.appService.getHello();
  }
}
