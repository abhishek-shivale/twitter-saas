-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Secreat" (
    "id" TEXT NOT NULL,
    "API_KEY" TEXT NOT NULL,
    "API_SECRET" TEXT NOT NULL,
    "ACCESS_TOKEN" TEXT NOT NULL,
    "ACCESS_SECRET" TEXT NOT NULL,
    "CLIENT_ID" TEXT NOT NULL,
    "CLIENT_SECRET" TEXT NOT NULL,
    "BEARER_TOKEN" TEXT NOT NULL,
    "APP_ID" TEXT NOT NULL,
    "GOOGLE_API_KEY" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Secreat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Secreat_API_KEY_key" ON "Secreat"("API_KEY");

-- CreateIndex
CREATE UNIQUE INDEX "Secreat_API_SECRET_key" ON "Secreat"("API_SECRET");

-- CreateIndex
CREATE UNIQUE INDEX "Secreat_ACCESS_TOKEN_key" ON "Secreat"("ACCESS_TOKEN");

-- CreateIndex
CREATE UNIQUE INDEX "Secreat_ACCESS_SECRET_key" ON "Secreat"("ACCESS_SECRET");

-- CreateIndex
CREATE UNIQUE INDEX "Secreat_CLIENT_ID_key" ON "Secreat"("CLIENT_ID");

-- CreateIndex
CREATE UNIQUE INDEX "Secreat_CLIENT_SECRET_key" ON "Secreat"("CLIENT_SECRET");

-- CreateIndex
CREATE UNIQUE INDEX "Secreat_BEARER_TOKEN_key" ON "Secreat"("BEARER_TOKEN");

-- CreateIndex
CREATE UNIQUE INDEX "Secreat_APP_ID_key" ON "Secreat"("APP_ID");

-- CreateIndex
CREATE UNIQUE INDEX "Secreat_GOOGLE_API_KEY_key" ON "Secreat"("GOOGLE_API_KEY");

-- AddForeignKey
ALTER TABLE "Secreat" ADD CONSTRAINT "Secreat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
