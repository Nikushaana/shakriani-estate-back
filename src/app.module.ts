import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const isProduction = process.env.NODE_ENV === 'production';

        if (isProduction) {
          return {
            type: 'postgres',
            url: config.get<string>('DATABASE_URL'),
            ssl: {
              rejectUnauthorized: false,
            },
            autoLoadEntities: true,
            synchronize: true,
          };
        } else {
          return {
            type: 'postgres',
            host: config.get<string>('DB_HOST'),
            port: config.get<number>('DB_PORT'),
            username: config.get<string>('DB_USER'),
            password: config.get<string>('DB_PASSWORD'),
            database: config.get<string>('DB_NAME'),
            autoLoadEntities: true,
            synchronize: true,
          };
        }
      },
    }),
    AdminModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
