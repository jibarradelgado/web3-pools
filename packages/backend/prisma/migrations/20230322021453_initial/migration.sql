-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "wallet_address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pools" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "apy" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Pools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deposits" (
    "id" SERIAL NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "poolId" INTEGER NOT NULL,

    CONSTRAINT "Deposits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Withdrawals" (
    "id" SERIAL NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "poolId" INTEGER NOT NULL,

    CONSTRAINT "Withdrawals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_wallet_address_key" ON "Users"("wallet_address");

-- CreateIndex
CREATE UNIQUE INDEX "Pools_address_key" ON "Pools"("address");

-- AddForeignKey
ALTER TABLE "Deposits" ADD CONSTRAINT "Deposits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deposits" ADD CONSTRAINT "Deposits_poolId_fkey" FOREIGN KEY ("poolId") REFERENCES "Pools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Withdrawals" ADD CONSTRAINT "Withdrawals_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Withdrawals" ADD CONSTRAINT "Withdrawals_poolId_fkey" FOREIGN KEY ("poolId") REFERENCES "Pools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
