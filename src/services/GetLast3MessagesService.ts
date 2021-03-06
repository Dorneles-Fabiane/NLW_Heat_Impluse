import prismaClient from '../prisma';

class GetLast3MessagesService {
  async execute() {
    const messega = await prismaClient.message.findMany({
      take: 3,
      orderBy: {
        created_at: 'desc'
      },
      include: {
        user: true
      }
    });
    
    return messega;
  }
}

export { GetLast3MessagesService }