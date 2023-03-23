import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { Deposits, Prisma } from '@prisma/client'

@Injectable()
export class DepositsService {
  constructor(private prisma: PrismaService) {}

  async allDeposits(): Promise<Deposits[]> {
    return this.prisma.deposits.findMany({
      include: {
        user: true,
        pool: true,
      },
    })
  }

  async deposits(params: {
    where?: Prisma.DepositsWhereInput
  }): Promise<Deposits[]> {
    const { where } = params
    return this.prisma.deposits.findMany({
      where: {
        pool: {
          name: where.pool.name,
        },
      },
      include: {
        user: true,
        pool: true,
      },
    })
  }

  async createDeposit({
    data,
  }: {
    data: Pick<Deposits, 'amount' | 'poolId' | 'userId'>
  }): Promise<Deposits> {
    const { amount, poolId, userId } = data
    const deposit = await this.prisma.deposits.create({
      data: {
        amount: amount,
        poolId: poolId,
        userId: userId,
      },
      include: {
        user: true,
        pool: true,
      },
    })
    return deposit
  }
}
