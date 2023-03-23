import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { Users, Prisma } from '@prisma/client'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async users(): Promise<Users[]> {
    return this.prisma.users.findMany()
  }

  async user(params: {
    where: Prisma.UsersWhereUniqueInput
  }): Promise<Users | null> {
    const { where } = params
    return this.prisma.users.findUnique({
      where: where,
    })
  }

  async createUser({
    data,
  }: {
    data: Pick<Users, 'wallet_address'>
  }): Promise<Users> {
    const { wallet_address } = data
    const user = await this.prisma.users.create({
      data: {
        wallet_address: wallet_address,
      },
    })
    return user
  }
}
