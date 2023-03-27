import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class FormatResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const { res } = context.getArgByIndex(0);
    return next.handle().pipe(
      map((value) => {
        value = value ? value : null;
        const resp: any = { statusCode: res.statusCode };
        if (typeof value === 'string') resp.message = value;
        else resp.data = value;
        return resp;
      }),
    );
  }
}
