import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { Pools, Prisma } from '@prisma/client'

@Injectable()
export class PoolsService {
  constructor(private prisma: PrismaService) {}

  async pools(): Promise<Pools[]> {
    return this.prisma.pools.findMany()
  }

  async pool(params: {
    where: Prisma.PoolsWhereUniqueInput
  }): Promise<Pools | null> {
    const { where } = params
    return this.prisma.pools.findUnique({
      where: where,
    })
  }

  async createPool({
    data,
  }: {
    data: Pick<Pools, 'name' | 'address' | 'apy'>
  }): Promise<Pools> {
    const { name, address, apy } = data
    const pool = await this.prisma.pools.create({
      data: {
        name: name,
        address: address,
        apy: apy,
      },
    })
    return pool
  }
}
