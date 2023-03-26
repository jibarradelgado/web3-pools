import { Controller, Get, Post, Param, Body } from '@nestjs/common'
import { UsersService } from '../services/users.service'
import { Users as UsersModel } from '@prisma/client'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<UsersModel[]> {
    return this.usersService.users()
  }

  @Get('id/:userId')
  async getUserById(@Param('userId') userId: number): Promise<UsersModel> {
    return this.usersService.user({
      where: {
        id: Number(userId),
      },
    })
  }

  @Get('wallet/:userWallet')
  async getUserByWallet(
    @Param('userWallet') wallet_address: string,
  ): Promise<UsersModel> {
    return this.usersService.user({
      where: {
        wallet_address: wallet_address,
      },
    })
  }

  @Post('user')
  async createUser(
    @Body() userData: { wallet_address: string },
  ): Promise<UsersModel> {
    const { wallet_address } = userData
    return this.usersService.createUser({
      data: {
        wallet_address: wallet_address,
      },
    })
  }
}
