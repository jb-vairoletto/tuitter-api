import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TuitsService } from './tuits.service';
import { Tuit } from './tuit.entity';
import { CreateTuitDto, PaginationQueryDto, UpdateTuitDto } from './dto';

@Controller('tuits')
export class TuitsController {

    constructor(private readonly tuitService: TuitsService){
        
    }

    @Get()
    getTuits(@Query() pagination: PaginationQueryDto): Promise<Tuit[]>{
        return this.tuitService.getTuits(pagination);
    }

    @Get(':id')
    getTuit(@Param('id') id: number): Promise<Tuit>{
        return this.getTuit(id);
    }

    @Post()
    createTuit(@Body() message: CreateTuitDto): Promise<Tuit>{
        return this.createTuit(message);
    }
    @Patch(':id')
    updateTuit(@Param('id') id:number, @Body() message: UpdateTuitDto): Promise<Tuit>{
        return this.tuitService.updateTuit(id, message)
    }
    @Delete(':id')
    deleteTuit(@Param('id') id:number): Promise<void>{
        return this.tuitService.removeTuit(id);
    }
}
