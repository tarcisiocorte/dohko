import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('/events')
export class EventsController {
  @Get()
  findAll() {}
  @Get(':id')
  findOne(@Param('id') id) {
    return id
  }
  @Post()
  create() {}
  @Patch()
  update() {}
  @Delete()
  remove() {}
}
