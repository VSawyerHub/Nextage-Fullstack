
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model UserGame
 * 
 */
export type UserGame = $Result.DefaultSelection<Prisma.$UserGamePayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model RateLimitRequest
 * 
 */
export type RateLimitRequest = $Result.DefaultSelection<Prisma.$RateLimitRequestPayload>
/**
 * Model RateLimitViolation
 * 
 */
export type RateLimitViolation = $Result.DefaultSelection<Prisma.$RateLimitViolationPayload>
/**
 * Model RateLimitBlock
 * 
 */
export type RateLimitBlock = $Result.DefaultSelection<Prisma.$RateLimitBlockPayload>
/**
 * Model UserGameStatus
 * 
 */
export type UserGameStatus = $Result.DefaultSelection<Prisma.$UserGameStatusPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AuthRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type AuthRole = (typeof AuthRole)[keyof typeof AuthRole]

}

export type AuthRole = $Enums.AuthRole

export const AuthRole: typeof $Enums.AuthRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more RefreshTokens
 * const refreshTokens = await prisma.refreshToken.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more RefreshTokens
   * const refreshTokens = await prisma.refreshToken.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userGame`: Exposes CRUD operations for the **UserGame** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGames
    * const userGames = await prisma.userGame.findMany()
    * ```
    */
  get userGame(): Prisma.UserGameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rateLimitRequest`: Exposes CRUD operations for the **RateLimitRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RateLimitRequests
    * const rateLimitRequests = await prisma.rateLimitRequest.findMany()
    * ```
    */
  get rateLimitRequest(): Prisma.RateLimitRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rateLimitViolation`: Exposes CRUD operations for the **RateLimitViolation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RateLimitViolations
    * const rateLimitViolations = await prisma.rateLimitViolation.findMany()
    * ```
    */
  get rateLimitViolation(): Prisma.RateLimitViolationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rateLimitBlock`: Exposes CRUD operations for the **RateLimitBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RateLimitBlocks
    * const rateLimitBlocks = await prisma.rateLimitBlock.findMany()
    * ```
    */
  get rateLimitBlock(): Prisma.RateLimitBlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userGameStatus`: Exposes CRUD operations for the **UserGameStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGameStatuses
    * const userGameStatuses = await prisma.userGameStatus.findMany()
    * ```
    */
  get userGameStatus(): Prisma.UserGameStatusDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    RefreshToken: 'RefreshToken',
    User: 'User',
    Account: 'Account',
    Game: 'Game',
    UserGame: 'UserGame',
    VerificationToken: 'VerificationToken',
    RateLimitRequest: 'RateLimitRequest',
    RateLimitViolation: 'RateLimitViolation',
    RateLimitBlock: 'RateLimitBlock',
    UserGameStatus: 'UserGameStatus'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "refreshToken" | "user" | "account" | "game" | "userGame" | "verificationToken" | "rateLimitRequest" | "rateLimitViolation" | "rateLimitBlock" | "userGameStatus"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      UserGame: {
        payload: Prisma.$UserGamePayload<ExtArgs>
        fields: Prisma.UserGameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          findFirst: {
            args: Prisma.UserGameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          findMany: {
            args: Prisma.UserGameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>[]
          }
          create: {
            args: Prisma.UserGameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          createMany: {
            args: Prisma.UserGameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserGameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>[]
          }
          delete: {
            args: Prisma.UserGameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          update: {
            args: Prisma.UserGameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          deleteMany: {
            args: Prisma.UserGameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserGameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserGameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>[]
          }
          upsert: {
            args: Prisma.UserGameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          aggregate: {
            args: Prisma.UserGameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserGame>
          }
          groupBy: {
            args: Prisma.UserGameGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGameGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserGameCountArgs<ExtArgs>
            result: $Utils.Optional<UserGameCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      RateLimitRequest: {
        payload: Prisma.$RateLimitRequestPayload<ExtArgs>
        fields: Prisma.RateLimitRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RateLimitRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RateLimitRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitRequestPayload>
          }
          findFirst: {
            args: Prisma.RateLimitRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RateLimitRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitRequestPayload>
          }
          findMany: {
            args: Prisma.RateLimitRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitRequestPayload>[]
          }
          create: {
            args: Prisma.RateLimitRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitRequestPayload>
          }
          createMany: {
            args: Prisma.RateLimitRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RateLimitRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitRequestPayload>[]
          }
          delete: {
            args: Prisma.RateLimitRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitRequestPayload>
          }
          update: {
            args: Prisma.RateLimitRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitRequestPayload>
          }
          deleteMany: {
            args: Prisma.RateLimitRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RateLimitRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RateLimitRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitRequestPayload>[]
          }
          upsert: {
            args: Prisma.RateLimitRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitRequestPayload>
          }
          aggregate: {
            args: Prisma.RateLimitRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRateLimitRequest>
          }
          groupBy: {
            args: Prisma.RateLimitRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RateLimitRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RateLimitRequestCountArgs<ExtArgs>
            result: $Utils.Optional<RateLimitRequestCountAggregateOutputType> | number
          }
        }
      }
      RateLimitViolation: {
        payload: Prisma.$RateLimitViolationPayload<ExtArgs>
        fields: Prisma.RateLimitViolationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RateLimitViolationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitViolationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RateLimitViolationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitViolationPayload>
          }
          findFirst: {
            args: Prisma.RateLimitViolationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitViolationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RateLimitViolationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitViolationPayload>
          }
          findMany: {
            args: Prisma.RateLimitViolationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitViolationPayload>[]
          }
          create: {
            args: Prisma.RateLimitViolationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitViolationPayload>
          }
          createMany: {
            args: Prisma.RateLimitViolationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RateLimitViolationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitViolationPayload>[]
          }
          delete: {
            args: Prisma.RateLimitViolationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitViolationPayload>
          }
          update: {
            args: Prisma.RateLimitViolationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitViolationPayload>
          }
          deleteMany: {
            args: Prisma.RateLimitViolationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RateLimitViolationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RateLimitViolationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitViolationPayload>[]
          }
          upsert: {
            args: Prisma.RateLimitViolationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitViolationPayload>
          }
          aggregate: {
            args: Prisma.RateLimitViolationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRateLimitViolation>
          }
          groupBy: {
            args: Prisma.RateLimitViolationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RateLimitViolationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RateLimitViolationCountArgs<ExtArgs>
            result: $Utils.Optional<RateLimitViolationCountAggregateOutputType> | number
          }
        }
      }
      RateLimitBlock: {
        payload: Prisma.$RateLimitBlockPayload<ExtArgs>
        fields: Prisma.RateLimitBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RateLimitBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RateLimitBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitBlockPayload>
          }
          findFirst: {
            args: Prisma.RateLimitBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RateLimitBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitBlockPayload>
          }
          findMany: {
            args: Prisma.RateLimitBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitBlockPayload>[]
          }
          create: {
            args: Prisma.RateLimitBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitBlockPayload>
          }
          createMany: {
            args: Prisma.RateLimitBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RateLimitBlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitBlockPayload>[]
          }
          delete: {
            args: Prisma.RateLimitBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitBlockPayload>
          }
          update: {
            args: Prisma.RateLimitBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitBlockPayload>
          }
          deleteMany: {
            args: Prisma.RateLimitBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RateLimitBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RateLimitBlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitBlockPayload>[]
          }
          upsert: {
            args: Prisma.RateLimitBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitBlockPayload>
          }
          aggregate: {
            args: Prisma.RateLimitBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRateLimitBlock>
          }
          groupBy: {
            args: Prisma.RateLimitBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<RateLimitBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.RateLimitBlockCountArgs<ExtArgs>
            result: $Utils.Optional<RateLimitBlockCountAggregateOutputType> | number
          }
        }
      }
      UserGameStatus: {
        payload: Prisma.$UserGameStatusPayload<ExtArgs>
        fields: Prisma.UserGameStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGameStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGameStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGameStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGameStatusPayload>
          }
          findFirst: {
            args: Prisma.UserGameStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGameStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGameStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGameStatusPayload>
          }
          findMany: {
            args: Prisma.UserGameStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGameStatusPayload>[]
          }
          create: {
            args: Prisma.UserGameStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGameStatusPayload>
          }
          createMany: {
            args: Prisma.UserGameStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserGameStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGameStatusPayload>[]
          }
          delete: {
            args: Prisma.UserGameStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGameStatusPayload>
          }
          update: {
            args: Prisma.UserGameStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGameStatusPayload>
          }
          deleteMany: {
            args: Prisma.UserGameStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserGameStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserGameStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGameStatusPayload>[]
          }
          upsert: {
            args: Prisma.UserGameStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGameStatusPayload>
          }
          aggregate: {
            args: Prisma.UserGameStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserGameStatus>
          }
          groupBy: {
            args: Prisma.UserGameStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGameStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserGameStatusCountArgs<ExtArgs>
            result: $Utils.Optional<UserGameStatusCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    refreshToken?: RefreshTokenOmit
    user?: UserOmit
    account?: AccountOmit
    game?: GameOmit
    userGame?: UserGameOmit
    verificationToken?: VerificationTokenOmit
    rateLimitRequest?: RateLimitRequestOmit
    rateLimitViolation?: RateLimitViolationOmit
    rateLimitBlock?: RateLimitBlockOmit
    userGameStatus?: UserGameStatusOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    gameStatus: number
    refreshTokens: number
    userGames: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    gameStatus?: boolean | UserCountOutputTypeCountGameStatusArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
    userGames?: boolean | UserCountOutputTypeCountUserGamesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGameStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGameStatusWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGameWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    userGames: number
    gameStatuses: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userGames?: boolean | GameCountOutputTypeCountUserGamesArgs
    gameStatuses?: boolean | GameCountOutputTypeCountGameStatusesArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountUserGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGameWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountGameStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGameStatusWhereInput
  }


  /**
   * Models
   */

  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    issuedAt: Date | null
    revokedAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    issuedAt: Date | null
    revokedAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    expiresAt: number
    issuedAt: number
    revokedAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    issuedAt?: true
    revokedAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    issuedAt?: true
    revokedAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    issuedAt?: true
    revokedAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    token: string
    userId: string
    expiresAt: Date
    issuedAt: Date
    revokedAt: Date | null
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    issuedAt?: boolean
    revokedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    issuedAt?: boolean
    revokedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    issuedAt?: boolean
    revokedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    issuedAt?: boolean
    revokedAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "expiresAt" | "issuedAt" | "revokedAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      expiresAt: Date
      issuedAt: Date
      revokedAt: Date | null
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly issuedAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly revokedAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    role: $Enums.AuthRole | null
    createdAt: Date | null
    username: string | null
    password: string | null
    hashedPassword: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    role: $Enums.AuthRole | null
    createdAt: Date | null
    username: string | null
    password: string | null
    hashedPassword: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    role: number
    createdAt: number
    username: number
    password: number
    hashedPassword: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    createdAt?: true
    username?: true
    password?: true
    hashedPassword?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    createdAt?: true
    username?: true
    password?: true
    hashedPassword?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    createdAt?: true
    username?: true
    password?: true
    hashedPassword?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    role: $Enums.AuthRole
    createdAt: Date
    username: string | null
    password: string | null
    hashedPassword: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    username?: boolean
    password?: boolean
    hashedPassword?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    gameStatus?: boolean | User$gameStatusArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    userGames?: boolean | User$userGamesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    username?: boolean
    password?: boolean
    hashedPassword?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    username?: boolean
    password?: boolean
    hashedPassword?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    username?: boolean
    password?: boolean
    hashedPassword?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "role" | "createdAt" | "username" | "password" | "hashedPassword", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    gameStatus?: boolean | User$gameStatusArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    userGames?: boolean | User$userGamesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      gameStatus: Prisma.$UserGameStatusPayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      userGames: Prisma.$UserGamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      role: $Enums.AuthRole
      createdAt: Date
      username: string | null
      password: string | null
      hashedPassword: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gameStatus<T extends User$gameStatusArgs<ExtArgs> = {}>(args?: Subset<T, User$gameStatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGameStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userGames<T extends User$userGamesArgs<ExtArgs> = {}>(args?: Subset<T, User$userGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'AuthRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.gameStatus
   */
  export type User$gameStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStatus
     */
    select?: UserGameStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameStatus
     */
    omit?: UserGameStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameStatusInclude<ExtArgs> | null
    where?: UserGameStatusWhereInput
    orderBy?: UserGameStatusOrderByWithRelationInput | UserGameStatusOrderByWithRelationInput[]
    cursor?: UserGameStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGameStatusScalarFieldEnum | UserGameStatusScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User.userGames
   */
  export type User$userGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    where?: UserGameWhereInput
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    cursor?: UserGameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    id: number | null
  }

  export type GameSumAggregateOutputType = {
    id: number | null
  }

  export type GameMinAggregateOutputType = {
    id: number | null
    name: string | null
    steamAppId: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameMaxAggregateOutputType = {
    id: number | null
    name: string | null
    steamAppId: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    name: number
    steamAppId: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    id?: true
  }

  export type GameSumAggregateInputType = {
    id?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    name?: true
    steamAppId?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    name?: true
    steamAppId?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    name?: true
    steamAppId?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: number
    name: string
    steamAppId: string | null
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    steamAppId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userGames?: boolean | Game$userGamesArgs<ExtArgs>
    gameStatuses?: boolean | Game$gameStatusesArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    steamAppId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    steamAppId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    name?: boolean
    steamAppId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "steamAppId" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userGames?: boolean | Game$userGamesArgs<ExtArgs>
    gameStatuses?: boolean | Game$gameStatusesArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      userGames: Prisma.$UserGamePayload<ExtArgs>[]
      gameStatuses: Prisma.$UserGameStatusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      steamAppId: string | null
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userGames<T extends Game$userGamesArgs<ExtArgs> = {}>(args?: Subset<T, Game$userGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gameStatuses<T extends Game$gameStatusesArgs<ExtArgs> = {}>(args?: Subset<T, Game$gameStatusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGameStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'Int'>
    readonly name: FieldRef<"Game", 'String'>
    readonly steamAppId: FieldRef<"Game", 'String'>
    readonly imageUrl: FieldRef<"Game", 'String'>
    readonly createdAt: FieldRef<"Game", 'DateTime'>
    readonly updatedAt: FieldRef<"Game", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.userGames
   */
  export type Game$userGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    where?: UserGameWhereInput
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    cursor?: UserGameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * Game.gameStatuses
   */
  export type Game$gameStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStatus
     */
    select?: UserGameStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameStatus
     */
    omit?: UserGameStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameStatusInclude<ExtArgs> | null
    where?: UserGameStatusWhereInput
    orderBy?: UserGameStatusOrderByWithRelationInput | UserGameStatusOrderByWithRelationInput[]
    cursor?: UserGameStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGameStatusScalarFieldEnum | UserGameStatusScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model UserGame
   */

  export type AggregateUserGame = {
    _count: UserGameCountAggregateOutputType | null
    _avg: UserGameAvgAggregateOutputType | null
    _sum: UserGameSumAggregateOutputType | null
    _min: UserGameMinAggregateOutputType | null
    _max: UserGameMaxAggregateOutputType | null
  }

  export type UserGameAvgAggregateOutputType = {
    id: number | null
    gameId: number | null
    playtimeMinutes: number | null
  }

  export type UserGameSumAggregateOutputType = {
    id: number | null
    gameId: number | null
    playtimeMinutes: number | null
  }

  export type UserGameMinAggregateOutputType = {
    id: number | null
    userId: string | null
    gameId: number | null
    playtimeMinutes: number | null
    lastPlayedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserGameMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    gameId: number | null
    playtimeMinutes: number | null
    lastPlayedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserGameCountAggregateOutputType = {
    id: number
    userId: number
    gameId: number
    playtimeMinutes: number
    lastPlayedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserGameAvgAggregateInputType = {
    id?: true
    gameId?: true
    playtimeMinutes?: true
  }

  export type UserGameSumAggregateInputType = {
    id?: true
    gameId?: true
    playtimeMinutes?: true
  }

  export type UserGameMinAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    playtimeMinutes?: true
    lastPlayedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserGameMaxAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    playtimeMinutes?: true
    lastPlayedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserGameCountAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    playtimeMinutes?: true
    lastPlayedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserGameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGame to aggregate.
     */
    where?: UserGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGames to fetch.
     */
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGames
    **/
    _count?: true | UserGameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserGameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserGameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGameMaxAggregateInputType
  }

  export type GetUserGameAggregateType<T extends UserGameAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGame[P]>
      : GetScalarType<T[P], AggregateUserGame[P]>
  }




  export type UserGameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGameWhereInput
    orderBy?: UserGameOrderByWithAggregationInput | UserGameOrderByWithAggregationInput[]
    by: UserGameScalarFieldEnum[] | UserGameScalarFieldEnum
    having?: UserGameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGameCountAggregateInputType | true
    _avg?: UserGameAvgAggregateInputType
    _sum?: UserGameSumAggregateInputType
    _min?: UserGameMinAggregateInputType
    _max?: UserGameMaxAggregateInputType
  }

  export type UserGameGroupByOutputType = {
    id: number
    userId: string
    gameId: number
    playtimeMinutes: number
    lastPlayedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserGameCountAggregateOutputType | null
    _avg: UserGameAvgAggregateOutputType | null
    _sum: UserGameSumAggregateOutputType | null
    _min: UserGameMinAggregateOutputType | null
    _max: UserGameMaxAggregateOutputType | null
  }

  type GetUserGameGroupByPayload<T extends UserGameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGameGroupByOutputType[P]>
            : GetScalarType<T[P], UserGameGroupByOutputType[P]>
        }
      >
    >


  export type UserGameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameId?: boolean
    playtimeMinutes?: boolean
    lastPlayedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGame"]>

  export type UserGameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameId?: boolean
    playtimeMinutes?: boolean
    lastPlayedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGame"]>

  export type UserGameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameId?: boolean
    playtimeMinutes?: boolean
    lastPlayedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGame"]>

  export type UserGameSelectScalar = {
    id?: boolean
    userId?: boolean
    gameId?: boolean
    playtimeMinutes?: boolean
    lastPlayedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserGameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "gameId" | "playtimeMinutes" | "lastPlayedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["userGame"]>
  export type UserGameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type UserGameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type UserGameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $UserGamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserGame"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      gameId: number
      playtimeMinutes: number
      lastPlayedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userGame"]>
    composites: {}
  }

  type UserGameGetPayload<S extends boolean | null | undefined | UserGameDefaultArgs> = $Result.GetResult<Prisma.$UserGamePayload, S>

  type UserGameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserGameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserGameCountAggregateInputType | true
    }

  export interface UserGameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGame'], meta: { name: 'UserGame' } }
    /**
     * Find zero or one UserGame that matches the filter.
     * @param {UserGameFindUniqueArgs} args - Arguments to find a UserGame
     * @example
     * // Get one UserGame
     * const userGame = await prisma.userGame.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserGameFindUniqueArgs>(args: SelectSubset<T, UserGameFindUniqueArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserGame that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserGameFindUniqueOrThrowArgs} args - Arguments to find a UserGame
     * @example
     * // Get one UserGame
     * const userGame = await prisma.userGame.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserGameFindUniqueOrThrowArgs>(args: SelectSubset<T, UserGameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGame that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameFindFirstArgs} args - Arguments to find a UserGame
     * @example
     * // Get one UserGame
     * const userGame = await prisma.userGame.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserGameFindFirstArgs>(args?: SelectSubset<T, UserGameFindFirstArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGame that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameFindFirstOrThrowArgs} args - Arguments to find a UserGame
     * @example
     * // Get one UserGame
     * const userGame = await prisma.userGame.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserGameFindFirstOrThrowArgs>(args?: SelectSubset<T, UserGameFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserGames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGames
     * const userGames = await prisma.userGame.findMany()
     * 
     * // Get first 10 UserGames
     * const userGames = await prisma.userGame.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userGameWithIdOnly = await prisma.userGame.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserGameFindManyArgs>(args?: SelectSubset<T, UserGameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserGame.
     * @param {UserGameCreateArgs} args - Arguments to create a UserGame.
     * @example
     * // Create one UserGame
     * const UserGame = await prisma.userGame.create({
     *   data: {
     *     // ... data to create a UserGame
     *   }
     * })
     * 
     */
    create<T extends UserGameCreateArgs>(args: SelectSubset<T, UserGameCreateArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserGames.
     * @param {UserGameCreateManyArgs} args - Arguments to create many UserGames.
     * @example
     * // Create many UserGames
     * const userGame = await prisma.userGame.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserGameCreateManyArgs>(args?: SelectSubset<T, UserGameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserGames and returns the data saved in the database.
     * @param {UserGameCreateManyAndReturnArgs} args - Arguments to create many UserGames.
     * @example
     * // Create many UserGames
     * const userGame = await prisma.userGame.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserGames and only return the `id`
     * const userGameWithIdOnly = await prisma.userGame.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserGameCreateManyAndReturnArgs>(args?: SelectSubset<T, UserGameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserGame.
     * @param {UserGameDeleteArgs} args - Arguments to delete one UserGame.
     * @example
     * // Delete one UserGame
     * const UserGame = await prisma.userGame.delete({
     *   where: {
     *     // ... filter to delete one UserGame
     *   }
     * })
     * 
     */
    delete<T extends UserGameDeleteArgs>(args: SelectSubset<T, UserGameDeleteArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserGame.
     * @param {UserGameUpdateArgs} args - Arguments to update one UserGame.
     * @example
     * // Update one UserGame
     * const userGame = await prisma.userGame.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserGameUpdateArgs>(args: SelectSubset<T, UserGameUpdateArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserGames.
     * @param {UserGameDeleteManyArgs} args - Arguments to filter UserGames to delete.
     * @example
     * // Delete a few UserGames
     * const { count } = await prisma.userGame.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserGameDeleteManyArgs>(args?: SelectSubset<T, UserGameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGames
     * const userGame = await prisma.userGame.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserGameUpdateManyArgs>(args: SelectSubset<T, UserGameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGames and returns the data updated in the database.
     * @param {UserGameUpdateManyAndReturnArgs} args - Arguments to update many UserGames.
     * @example
     * // Update many UserGames
     * const userGame = await prisma.userGame.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserGames and only return the `id`
     * const userGameWithIdOnly = await prisma.userGame.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserGameUpdateManyAndReturnArgs>(args: SelectSubset<T, UserGameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserGame.
     * @param {UserGameUpsertArgs} args - Arguments to update or create a UserGame.
     * @example
     * // Update or create a UserGame
     * const userGame = await prisma.userGame.upsert({
     *   create: {
     *     // ... data to create a UserGame
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGame we want to update
     *   }
     * })
     */
    upsert<T extends UserGameUpsertArgs>(args: SelectSubset<T, UserGameUpsertArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameCountArgs} args - Arguments to filter UserGames to count.
     * @example
     * // Count the number of UserGames
     * const count = await prisma.userGame.count({
     *   where: {
     *     // ... the filter for the UserGames we want to count
     *   }
     * })
    **/
    count<T extends UserGameCountArgs>(
      args?: Subset<T, UserGameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserGameAggregateArgs>(args: Subset<T, UserGameAggregateArgs>): Prisma.PrismaPromise<GetUserGameAggregateType<T>>

    /**
     * Group by UserGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGameGroupByArgs['orderBy'] }
        : { orderBy?: UserGameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGame model
   */
  readonly fields: UserGameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGame.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserGame model
   */
  interface UserGameFieldRefs {
    readonly id: FieldRef<"UserGame", 'Int'>
    readonly userId: FieldRef<"UserGame", 'String'>
    readonly gameId: FieldRef<"UserGame", 'Int'>
    readonly playtimeMinutes: FieldRef<"UserGame", 'Int'>
    readonly lastPlayedAt: FieldRef<"UserGame", 'DateTime'>
    readonly createdAt: FieldRef<"UserGame", 'DateTime'>
    readonly updatedAt: FieldRef<"UserGame", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserGame findUnique
   */
  export type UserGameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGame to fetch.
     */
    where: UserGameWhereUniqueInput
  }

  /**
   * UserGame findUniqueOrThrow
   */
  export type UserGameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGame to fetch.
     */
    where: UserGameWhereUniqueInput
  }

  /**
   * UserGame findFirst
   */
  export type UserGameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGame to fetch.
     */
    where?: UserGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGames to fetch.
     */
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGames.
     */
    cursor?: UserGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGames.
     */
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * UserGame findFirstOrThrow
   */
  export type UserGameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGame to fetch.
     */
    where?: UserGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGames to fetch.
     */
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGames.
     */
    cursor?: UserGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGames.
     */
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * UserGame findMany
   */
  export type UserGameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGames to fetch.
     */
    where?: UserGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGames to fetch.
     */
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGames.
     */
    cursor?: UserGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGames.
     */
    skip?: number
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * UserGame create
   */
  export type UserGameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * The data needed to create a UserGame.
     */
    data: XOR<UserGameCreateInput, UserGameUncheckedCreateInput>
  }

  /**
   * UserGame createMany
   */
  export type UserGameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGames.
     */
    data: UserGameCreateManyInput | UserGameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGame createManyAndReturn
   */
  export type UserGameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * The data used to create many UserGames.
     */
    data: UserGameCreateManyInput | UserGameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGame update
   */
  export type UserGameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * The data needed to update a UserGame.
     */
    data: XOR<UserGameUpdateInput, UserGameUncheckedUpdateInput>
    /**
     * Choose, which UserGame to update.
     */
    where: UserGameWhereUniqueInput
  }

  /**
   * UserGame updateMany
   */
  export type UserGameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGames.
     */
    data: XOR<UserGameUpdateManyMutationInput, UserGameUncheckedUpdateManyInput>
    /**
     * Filter which UserGames to update
     */
    where?: UserGameWhereInput
    /**
     * Limit how many UserGames to update.
     */
    limit?: number
  }

  /**
   * UserGame updateManyAndReturn
   */
  export type UserGameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * The data used to update UserGames.
     */
    data: XOR<UserGameUpdateManyMutationInput, UserGameUncheckedUpdateManyInput>
    /**
     * Filter which UserGames to update
     */
    where?: UserGameWhereInput
    /**
     * Limit how many UserGames to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGame upsert
   */
  export type UserGameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * The filter to search for the UserGame to update in case it exists.
     */
    where: UserGameWhereUniqueInput
    /**
     * In case the UserGame found by the `where` argument doesn't exist, create a new UserGame with this data.
     */
    create: XOR<UserGameCreateInput, UserGameUncheckedCreateInput>
    /**
     * In case the UserGame was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGameUpdateInput, UserGameUncheckedUpdateInput>
  }

  /**
   * UserGame delete
   */
  export type UserGameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter which UserGame to delete.
     */
    where: UserGameWhereUniqueInput
  }

  /**
   * UserGame deleteMany
   */
  export type UserGameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGames to delete
     */
    where?: UserGameWhereInput
    /**
     * Limit how many UserGames to delete.
     */
    limit?: number
  }

  /**
   * UserGame without action
   */
  export type UserGameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model RateLimitRequest
   */

  export type AggregateRateLimitRequest = {
    _count: RateLimitRequestCountAggregateOutputType | null
    _avg: RateLimitRequestAvgAggregateOutputType | null
    _sum: RateLimitRequestSumAggregateOutputType | null
    _min: RateLimitRequestMinAggregateOutputType | null
    _max: RateLimitRequestMaxAggregateOutputType | null
  }

  export type RateLimitRequestAvgAggregateOutputType = {
    id: number | null
  }

  export type RateLimitRequestSumAggregateOutputType = {
    id: number | null
  }

  export type RateLimitRequestMinAggregateOutputType = {
    id: number | null
    ip: string | null
    timestamp: Date | null
  }

  export type RateLimitRequestMaxAggregateOutputType = {
    id: number | null
    ip: string | null
    timestamp: Date | null
  }

  export type RateLimitRequestCountAggregateOutputType = {
    id: number
    ip: number
    timestamp: number
    _all: number
  }


  export type RateLimitRequestAvgAggregateInputType = {
    id?: true
  }

  export type RateLimitRequestSumAggregateInputType = {
    id?: true
  }

  export type RateLimitRequestMinAggregateInputType = {
    id?: true
    ip?: true
    timestamp?: true
  }

  export type RateLimitRequestMaxAggregateInputType = {
    id?: true
    ip?: true
    timestamp?: true
  }

  export type RateLimitRequestCountAggregateInputType = {
    id?: true
    ip?: true
    timestamp?: true
    _all?: true
  }

  export type RateLimitRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RateLimitRequest to aggregate.
     */
    where?: RateLimitRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimitRequests to fetch.
     */
    orderBy?: RateLimitRequestOrderByWithRelationInput | RateLimitRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RateLimitRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimitRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimitRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RateLimitRequests
    **/
    _count?: true | RateLimitRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RateLimitRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RateLimitRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RateLimitRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RateLimitRequestMaxAggregateInputType
  }

  export type GetRateLimitRequestAggregateType<T extends RateLimitRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRateLimitRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRateLimitRequest[P]>
      : GetScalarType<T[P], AggregateRateLimitRequest[P]>
  }




  export type RateLimitRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RateLimitRequestWhereInput
    orderBy?: RateLimitRequestOrderByWithAggregationInput | RateLimitRequestOrderByWithAggregationInput[]
    by: RateLimitRequestScalarFieldEnum[] | RateLimitRequestScalarFieldEnum
    having?: RateLimitRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RateLimitRequestCountAggregateInputType | true
    _avg?: RateLimitRequestAvgAggregateInputType
    _sum?: RateLimitRequestSumAggregateInputType
    _min?: RateLimitRequestMinAggregateInputType
    _max?: RateLimitRequestMaxAggregateInputType
  }

  export type RateLimitRequestGroupByOutputType = {
    id: number
    ip: string
    timestamp: Date
    _count: RateLimitRequestCountAggregateOutputType | null
    _avg: RateLimitRequestAvgAggregateOutputType | null
    _sum: RateLimitRequestSumAggregateOutputType | null
    _min: RateLimitRequestMinAggregateOutputType | null
    _max: RateLimitRequestMaxAggregateOutputType | null
  }

  type GetRateLimitRequestGroupByPayload<T extends RateLimitRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RateLimitRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RateLimitRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RateLimitRequestGroupByOutputType[P]>
            : GetScalarType<T[P], RateLimitRequestGroupByOutputType[P]>
        }
      >
    >


  export type RateLimitRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["rateLimitRequest"]>

  export type RateLimitRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["rateLimitRequest"]>

  export type RateLimitRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["rateLimitRequest"]>

  export type RateLimitRequestSelectScalar = {
    id?: boolean
    ip?: boolean
    timestamp?: boolean
  }

  export type RateLimitRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ip" | "timestamp", ExtArgs["result"]["rateLimitRequest"]>

  export type $RateLimitRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RateLimitRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ip: string
      timestamp: Date
    }, ExtArgs["result"]["rateLimitRequest"]>
    composites: {}
  }

  type RateLimitRequestGetPayload<S extends boolean | null | undefined | RateLimitRequestDefaultArgs> = $Result.GetResult<Prisma.$RateLimitRequestPayload, S>

  type RateLimitRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RateLimitRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RateLimitRequestCountAggregateInputType | true
    }

  export interface RateLimitRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RateLimitRequest'], meta: { name: 'RateLimitRequest' } }
    /**
     * Find zero or one RateLimitRequest that matches the filter.
     * @param {RateLimitRequestFindUniqueArgs} args - Arguments to find a RateLimitRequest
     * @example
     * // Get one RateLimitRequest
     * const rateLimitRequest = await prisma.rateLimitRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RateLimitRequestFindUniqueArgs>(args: SelectSubset<T, RateLimitRequestFindUniqueArgs<ExtArgs>>): Prisma__RateLimitRequestClient<$Result.GetResult<Prisma.$RateLimitRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RateLimitRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RateLimitRequestFindUniqueOrThrowArgs} args - Arguments to find a RateLimitRequest
     * @example
     * // Get one RateLimitRequest
     * const rateLimitRequest = await prisma.rateLimitRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RateLimitRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, RateLimitRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RateLimitRequestClient<$Result.GetResult<Prisma.$RateLimitRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RateLimitRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitRequestFindFirstArgs} args - Arguments to find a RateLimitRequest
     * @example
     * // Get one RateLimitRequest
     * const rateLimitRequest = await prisma.rateLimitRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RateLimitRequestFindFirstArgs>(args?: SelectSubset<T, RateLimitRequestFindFirstArgs<ExtArgs>>): Prisma__RateLimitRequestClient<$Result.GetResult<Prisma.$RateLimitRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RateLimitRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitRequestFindFirstOrThrowArgs} args - Arguments to find a RateLimitRequest
     * @example
     * // Get one RateLimitRequest
     * const rateLimitRequest = await prisma.rateLimitRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RateLimitRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, RateLimitRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__RateLimitRequestClient<$Result.GetResult<Prisma.$RateLimitRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RateLimitRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RateLimitRequests
     * const rateLimitRequests = await prisma.rateLimitRequest.findMany()
     * 
     * // Get first 10 RateLimitRequests
     * const rateLimitRequests = await prisma.rateLimitRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rateLimitRequestWithIdOnly = await prisma.rateLimitRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RateLimitRequestFindManyArgs>(args?: SelectSubset<T, RateLimitRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateLimitRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RateLimitRequest.
     * @param {RateLimitRequestCreateArgs} args - Arguments to create a RateLimitRequest.
     * @example
     * // Create one RateLimitRequest
     * const RateLimitRequest = await prisma.rateLimitRequest.create({
     *   data: {
     *     // ... data to create a RateLimitRequest
     *   }
     * })
     * 
     */
    create<T extends RateLimitRequestCreateArgs>(args: SelectSubset<T, RateLimitRequestCreateArgs<ExtArgs>>): Prisma__RateLimitRequestClient<$Result.GetResult<Prisma.$RateLimitRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RateLimitRequests.
     * @param {RateLimitRequestCreateManyArgs} args - Arguments to create many RateLimitRequests.
     * @example
     * // Create many RateLimitRequests
     * const rateLimitRequest = await prisma.rateLimitRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RateLimitRequestCreateManyArgs>(args?: SelectSubset<T, RateLimitRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RateLimitRequests and returns the data saved in the database.
     * @param {RateLimitRequestCreateManyAndReturnArgs} args - Arguments to create many RateLimitRequests.
     * @example
     * // Create many RateLimitRequests
     * const rateLimitRequest = await prisma.rateLimitRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RateLimitRequests and only return the `id`
     * const rateLimitRequestWithIdOnly = await prisma.rateLimitRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RateLimitRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, RateLimitRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateLimitRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RateLimitRequest.
     * @param {RateLimitRequestDeleteArgs} args - Arguments to delete one RateLimitRequest.
     * @example
     * // Delete one RateLimitRequest
     * const RateLimitRequest = await prisma.rateLimitRequest.delete({
     *   where: {
     *     // ... filter to delete one RateLimitRequest
     *   }
     * })
     * 
     */
    delete<T extends RateLimitRequestDeleteArgs>(args: SelectSubset<T, RateLimitRequestDeleteArgs<ExtArgs>>): Prisma__RateLimitRequestClient<$Result.GetResult<Prisma.$RateLimitRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RateLimitRequest.
     * @param {RateLimitRequestUpdateArgs} args - Arguments to update one RateLimitRequest.
     * @example
     * // Update one RateLimitRequest
     * const rateLimitRequest = await prisma.rateLimitRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RateLimitRequestUpdateArgs>(args: SelectSubset<T, RateLimitRequestUpdateArgs<ExtArgs>>): Prisma__RateLimitRequestClient<$Result.GetResult<Prisma.$RateLimitRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RateLimitRequests.
     * @param {RateLimitRequestDeleteManyArgs} args - Arguments to filter RateLimitRequests to delete.
     * @example
     * // Delete a few RateLimitRequests
     * const { count } = await prisma.rateLimitRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RateLimitRequestDeleteManyArgs>(args?: SelectSubset<T, RateLimitRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RateLimitRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RateLimitRequests
     * const rateLimitRequest = await prisma.rateLimitRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RateLimitRequestUpdateManyArgs>(args: SelectSubset<T, RateLimitRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RateLimitRequests and returns the data updated in the database.
     * @param {RateLimitRequestUpdateManyAndReturnArgs} args - Arguments to update many RateLimitRequests.
     * @example
     * // Update many RateLimitRequests
     * const rateLimitRequest = await prisma.rateLimitRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RateLimitRequests and only return the `id`
     * const rateLimitRequestWithIdOnly = await prisma.rateLimitRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RateLimitRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, RateLimitRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateLimitRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RateLimitRequest.
     * @param {RateLimitRequestUpsertArgs} args - Arguments to update or create a RateLimitRequest.
     * @example
     * // Update or create a RateLimitRequest
     * const rateLimitRequest = await prisma.rateLimitRequest.upsert({
     *   create: {
     *     // ... data to create a RateLimitRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RateLimitRequest we want to update
     *   }
     * })
     */
    upsert<T extends RateLimitRequestUpsertArgs>(args: SelectSubset<T, RateLimitRequestUpsertArgs<ExtArgs>>): Prisma__RateLimitRequestClient<$Result.GetResult<Prisma.$RateLimitRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RateLimitRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitRequestCountArgs} args - Arguments to filter RateLimitRequests to count.
     * @example
     * // Count the number of RateLimitRequests
     * const count = await prisma.rateLimitRequest.count({
     *   where: {
     *     // ... the filter for the RateLimitRequests we want to count
     *   }
     * })
    **/
    count<T extends RateLimitRequestCountArgs>(
      args?: Subset<T, RateLimitRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RateLimitRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RateLimitRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RateLimitRequestAggregateArgs>(args: Subset<T, RateLimitRequestAggregateArgs>): Prisma.PrismaPromise<GetRateLimitRequestAggregateType<T>>

    /**
     * Group by RateLimitRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RateLimitRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RateLimitRequestGroupByArgs['orderBy'] }
        : { orderBy?: RateLimitRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RateLimitRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRateLimitRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RateLimitRequest model
   */
  readonly fields: RateLimitRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RateLimitRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RateLimitRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RateLimitRequest model
   */
  interface RateLimitRequestFieldRefs {
    readonly id: FieldRef<"RateLimitRequest", 'Int'>
    readonly ip: FieldRef<"RateLimitRequest", 'String'>
    readonly timestamp: FieldRef<"RateLimitRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RateLimitRequest findUnique
   */
  export type RateLimitRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitRequest
     */
    select?: RateLimitRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitRequest
     */
    omit?: RateLimitRequestOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitRequest to fetch.
     */
    where: RateLimitRequestWhereUniqueInput
  }

  /**
   * RateLimitRequest findUniqueOrThrow
   */
  export type RateLimitRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitRequest
     */
    select?: RateLimitRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitRequest
     */
    omit?: RateLimitRequestOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitRequest to fetch.
     */
    where: RateLimitRequestWhereUniqueInput
  }

  /**
   * RateLimitRequest findFirst
   */
  export type RateLimitRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitRequest
     */
    select?: RateLimitRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitRequest
     */
    omit?: RateLimitRequestOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitRequest to fetch.
     */
    where?: RateLimitRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimitRequests to fetch.
     */
    orderBy?: RateLimitRequestOrderByWithRelationInput | RateLimitRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RateLimitRequests.
     */
    cursor?: RateLimitRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimitRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimitRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RateLimitRequests.
     */
    distinct?: RateLimitRequestScalarFieldEnum | RateLimitRequestScalarFieldEnum[]
  }

  /**
   * RateLimitRequest findFirstOrThrow
   */
  export type RateLimitRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitRequest
     */
    select?: RateLimitRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitRequest
     */
    omit?: RateLimitRequestOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitRequest to fetch.
     */
    where?: RateLimitRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimitRequests to fetch.
     */
    orderBy?: RateLimitRequestOrderByWithRelationInput | RateLimitRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RateLimitRequests.
     */
    cursor?: RateLimitRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimitRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimitRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RateLimitRequests.
     */
    distinct?: RateLimitRequestScalarFieldEnum | RateLimitRequestScalarFieldEnum[]
  }

  /**
   * RateLimitRequest findMany
   */
  export type RateLimitRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitRequest
     */
    select?: RateLimitRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitRequest
     */
    omit?: RateLimitRequestOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitRequests to fetch.
     */
    where?: RateLimitRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimitRequests to fetch.
     */
    orderBy?: RateLimitRequestOrderByWithRelationInput | RateLimitRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RateLimitRequests.
     */
    cursor?: RateLimitRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimitRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimitRequests.
     */
    skip?: number
    distinct?: RateLimitRequestScalarFieldEnum | RateLimitRequestScalarFieldEnum[]
  }

  /**
   * RateLimitRequest create
   */
  export type RateLimitRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitRequest
     */
    select?: RateLimitRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitRequest
     */
    omit?: RateLimitRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a RateLimitRequest.
     */
    data: XOR<RateLimitRequestCreateInput, RateLimitRequestUncheckedCreateInput>
  }

  /**
   * RateLimitRequest createMany
   */
  export type RateLimitRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RateLimitRequests.
     */
    data: RateLimitRequestCreateManyInput | RateLimitRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RateLimitRequest createManyAndReturn
   */
  export type RateLimitRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitRequest
     */
    select?: RateLimitRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitRequest
     */
    omit?: RateLimitRequestOmit<ExtArgs> | null
    /**
     * The data used to create many RateLimitRequests.
     */
    data: RateLimitRequestCreateManyInput | RateLimitRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RateLimitRequest update
   */
  export type RateLimitRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitRequest
     */
    select?: RateLimitRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitRequest
     */
    omit?: RateLimitRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a RateLimitRequest.
     */
    data: XOR<RateLimitRequestUpdateInput, RateLimitRequestUncheckedUpdateInput>
    /**
     * Choose, which RateLimitRequest to update.
     */
    where: RateLimitRequestWhereUniqueInput
  }

  /**
   * RateLimitRequest updateMany
   */
  export type RateLimitRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RateLimitRequests.
     */
    data: XOR<RateLimitRequestUpdateManyMutationInput, RateLimitRequestUncheckedUpdateManyInput>
    /**
     * Filter which RateLimitRequests to update
     */
    where?: RateLimitRequestWhereInput
    /**
     * Limit how many RateLimitRequests to update.
     */
    limit?: number
  }

  /**
   * RateLimitRequest updateManyAndReturn
   */
  export type RateLimitRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitRequest
     */
    select?: RateLimitRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitRequest
     */
    omit?: RateLimitRequestOmit<ExtArgs> | null
    /**
     * The data used to update RateLimitRequests.
     */
    data: XOR<RateLimitRequestUpdateManyMutationInput, RateLimitRequestUncheckedUpdateManyInput>
    /**
     * Filter which RateLimitRequests to update
     */
    where?: RateLimitRequestWhereInput
    /**
     * Limit how many RateLimitRequests to update.
     */
    limit?: number
  }

  /**
   * RateLimitRequest upsert
   */
  export type RateLimitRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitRequest
     */
    select?: RateLimitRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitRequest
     */
    omit?: RateLimitRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the RateLimitRequest to update in case it exists.
     */
    where: RateLimitRequestWhereUniqueInput
    /**
     * In case the RateLimitRequest found by the `where` argument doesn't exist, create a new RateLimitRequest with this data.
     */
    create: XOR<RateLimitRequestCreateInput, RateLimitRequestUncheckedCreateInput>
    /**
     * In case the RateLimitRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RateLimitRequestUpdateInput, RateLimitRequestUncheckedUpdateInput>
  }

  /**
   * RateLimitRequest delete
   */
  export type RateLimitRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitRequest
     */
    select?: RateLimitRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitRequest
     */
    omit?: RateLimitRequestOmit<ExtArgs> | null
    /**
     * Filter which RateLimitRequest to delete.
     */
    where: RateLimitRequestWhereUniqueInput
  }

  /**
   * RateLimitRequest deleteMany
   */
  export type RateLimitRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RateLimitRequests to delete
     */
    where?: RateLimitRequestWhereInput
    /**
     * Limit how many RateLimitRequests to delete.
     */
    limit?: number
  }

  /**
   * RateLimitRequest without action
   */
  export type RateLimitRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitRequest
     */
    select?: RateLimitRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitRequest
     */
    omit?: RateLimitRequestOmit<ExtArgs> | null
  }


  /**
   * Model RateLimitViolation
   */

  export type AggregateRateLimitViolation = {
    _count: RateLimitViolationCountAggregateOutputType | null
    _avg: RateLimitViolationAvgAggregateOutputType | null
    _sum: RateLimitViolationSumAggregateOutputType | null
    _min: RateLimitViolationMinAggregateOutputType | null
    _max: RateLimitViolationMaxAggregateOutputType | null
  }

  export type RateLimitViolationAvgAggregateOutputType = {
    violations: number | null
  }

  export type RateLimitViolationSumAggregateOutputType = {
    violations: number | null
  }

  export type RateLimitViolationMinAggregateOutputType = {
    ip: string | null
    violations: number | null
  }

  export type RateLimitViolationMaxAggregateOutputType = {
    ip: string | null
    violations: number | null
  }

  export type RateLimitViolationCountAggregateOutputType = {
    ip: number
    violations: number
    _all: number
  }


  export type RateLimitViolationAvgAggregateInputType = {
    violations?: true
  }

  export type RateLimitViolationSumAggregateInputType = {
    violations?: true
  }

  export type RateLimitViolationMinAggregateInputType = {
    ip?: true
    violations?: true
  }

  export type RateLimitViolationMaxAggregateInputType = {
    ip?: true
    violations?: true
  }

  export type RateLimitViolationCountAggregateInputType = {
    ip?: true
    violations?: true
    _all?: true
  }

  export type RateLimitViolationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RateLimitViolation to aggregate.
     */
    where?: RateLimitViolationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimitViolations to fetch.
     */
    orderBy?: RateLimitViolationOrderByWithRelationInput | RateLimitViolationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RateLimitViolationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimitViolations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimitViolations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RateLimitViolations
    **/
    _count?: true | RateLimitViolationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RateLimitViolationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RateLimitViolationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RateLimitViolationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RateLimitViolationMaxAggregateInputType
  }

  export type GetRateLimitViolationAggregateType<T extends RateLimitViolationAggregateArgs> = {
        [P in keyof T & keyof AggregateRateLimitViolation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRateLimitViolation[P]>
      : GetScalarType<T[P], AggregateRateLimitViolation[P]>
  }




  export type RateLimitViolationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RateLimitViolationWhereInput
    orderBy?: RateLimitViolationOrderByWithAggregationInput | RateLimitViolationOrderByWithAggregationInput[]
    by: RateLimitViolationScalarFieldEnum[] | RateLimitViolationScalarFieldEnum
    having?: RateLimitViolationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RateLimitViolationCountAggregateInputType | true
    _avg?: RateLimitViolationAvgAggregateInputType
    _sum?: RateLimitViolationSumAggregateInputType
    _min?: RateLimitViolationMinAggregateInputType
    _max?: RateLimitViolationMaxAggregateInputType
  }

  export type RateLimitViolationGroupByOutputType = {
    ip: string
    violations: number
    _count: RateLimitViolationCountAggregateOutputType | null
    _avg: RateLimitViolationAvgAggregateOutputType | null
    _sum: RateLimitViolationSumAggregateOutputType | null
    _min: RateLimitViolationMinAggregateOutputType | null
    _max: RateLimitViolationMaxAggregateOutputType | null
  }

  type GetRateLimitViolationGroupByPayload<T extends RateLimitViolationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RateLimitViolationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RateLimitViolationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RateLimitViolationGroupByOutputType[P]>
            : GetScalarType<T[P], RateLimitViolationGroupByOutputType[P]>
        }
      >
    >


  export type RateLimitViolationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ip?: boolean
    violations?: boolean
  }, ExtArgs["result"]["rateLimitViolation"]>

  export type RateLimitViolationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ip?: boolean
    violations?: boolean
  }, ExtArgs["result"]["rateLimitViolation"]>

  export type RateLimitViolationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ip?: boolean
    violations?: boolean
  }, ExtArgs["result"]["rateLimitViolation"]>

  export type RateLimitViolationSelectScalar = {
    ip?: boolean
    violations?: boolean
  }

  export type RateLimitViolationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ip" | "violations", ExtArgs["result"]["rateLimitViolation"]>

  export type $RateLimitViolationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RateLimitViolation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ip: string
      violations: number
    }, ExtArgs["result"]["rateLimitViolation"]>
    composites: {}
  }

  type RateLimitViolationGetPayload<S extends boolean | null | undefined | RateLimitViolationDefaultArgs> = $Result.GetResult<Prisma.$RateLimitViolationPayload, S>

  type RateLimitViolationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RateLimitViolationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RateLimitViolationCountAggregateInputType | true
    }

  export interface RateLimitViolationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RateLimitViolation'], meta: { name: 'RateLimitViolation' } }
    /**
     * Find zero or one RateLimitViolation that matches the filter.
     * @param {RateLimitViolationFindUniqueArgs} args - Arguments to find a RateLimitViolation
     * @example
     * // Get one RateLimitViolation
     * const rateLimitViolation = await prisma.rateLimitViolation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RateLimitViolationFindUniqueArgs>(args: SelectSubset<T, RateLimitViolationFindUniqueArgs<ExtArgs>>): Prisma__RateLimitViolationClient<$Result.GetResult<Prisma.$RateLimitViolationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RateLimitViolation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RateLimitViolationFindUniqueOrThrowArgs} args - Arguments to find a RateLimitViolation
     * @example
     * // Get one RateLimitViolation
     * const rateLimitViolation = await prisma.rateLimitViolation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RateLimitViolationFindUniqueOrThrowArgs>(args: SelectSubset<T, RateLimitViolationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RateLimitViolationClient<$Result.GetResult<Prisma.$RateLimitViolationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RateLimitViolation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitViolationFindFirstArgs} args - Arguments to find a RateLimitViolation
     * @example
     * // Get one RateLimitViolation
     * const rateLimitViolation = await prisma.rateLimitViolation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RateLimitViolationFindFirstArgs>(args?: SelectSubset<T, RateLimitViolationFindFirstArgs<ExtArgs>>): Prisma__RateLimitViolationClient<$Result.GetResult<Prisma.$RateLimitViolationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RateLimitViolation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitViolationFindFirstOrThrowArgs} args - Arguments to find a RateLimitViolation
     * @example
     * // Get one RateLimitViolation
     * const rateLimitViolation = await prisma.rateLimitViolation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RateLimitViolationFindFirstOrThrowArgs>(args?: SelectSubset<T, RateLimitViolationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RateLimitViolationClient<$Result.GetResult<Prisma.$RateLimitViolationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RateLimitViolations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitViolationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RateLimitViolations
     * const rateLimitViolations = await prisma.rateLimitViolation.findMany()
     * 
     * // Get first 10 RateLimitViolations
     * const rateLimitViolations = await prisma.rateLimitViolation.findMany({ take: 10 })
     * 
     * // Only select the `ip`
     * const rateLimitViolationWithIpOnly = await prisma.rateLimitViolation.findMany({ select: { ip: true } })
     * 
     */
    findMany<T extends RateLimitViolationFindManyArgs>(args?: SelectSubset<T, RateLimitViolationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateLimitViolationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RateLimitViolation.
     * @param {RateLimitViolationCreateArgs} args - Arguments to create a RateLimitViolation.
     * @example
     * // Create one RateLimitViolation
     * const RateLimitViolation = await prisma.rateLimitViolation.create({
     *   data: {
     *     // ... data to create a RateLimitViolation
     *   }
     * })
     * 
     */
    create<T extends RateLimitViolationCreateArgs>(args: SelectSubset<T, RateLimitViolationCreateArgs<ExtArgs>>): Prisma__RateLimitViolationClient<$Result.GetResult<Prisma.$RateLimitViolationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RateLimitViolations.
     * @param {RateLimitViolationCreateManyArgs} args - Arguments to create many RateLimitViolations.
     * @example
     * // Create many RateLimitViolations
     * const rateLimitViolation = await prisma.rateLimitViolation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RateLimitViolationCreateManyArgs>(args?: SelectSubset<T, RateLimitViolationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RateLimitViolations and returns the data saved in the database.
     * @param {RateLimitViolationCreateManyAndReturnArgs} args - Arguments to create many RateLimitViolations.
     * @example
     * // Create many RateLimitViolations
     * const rateLimitViolation = await prisma.rateLimitViolation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RateLimitViolations and only return the `ip`
     * const rateLimitViolationWithIpOnly = await prisma.rateLimitViolation.createManyAndReturn({
     *   select: { ip: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RateLimitViolationCreateManyAndReturnArgs>(args?: SelectSubset<T, RateLimitViolationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateLimitViolationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RateLimitViolation.
     * @param {RateLimitViolationDeleteArgs} args - Arguments to delete one RateLimitViolation.
     * @example
     * // Delete one RateLimitViolation
     * const RateLimitViolation = await prisma.rateLimitViolation.delete({
     *   where: {
     *     // ... filter to delete one RateLimitViolation
     *   }
     * })
     * 
     */
    delete<T extends RateLimitViolationDeleteArgs>(args: SelectSubset<T, RateLimitViolationDeleteArgs<ExtArgs>>): Prisma__RateLimitViolationClient<$Result.GetResult<Prisma.$RateLimitViolationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RateLimitViolation.
     * @param {RateLimitViolationUpdateArgs} args - Arguments to update one RateLimitViolation.
     * @example
     * // Update one RateLimitViolation
     * const rateLimitViolation = await prisma.rateLimitViolation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RateLimitViolationUpdateArgs>(args: SelectSubset<T, RateLimitViolationUpdateArgs<ExtArgs>>): Prisma__RateLimitViolationClient<$Result.GetResult<Prisma.$RateLimitViolationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RateLimitViolations.
     * @param {RateLimitViolationDeleteManyArgs} args - Arguments to filter RateLimitViolations to delete.
     * @example
     * // Delete a few RateLimitViolations
     * const { count } = await prisma.rateLimitViolation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RateLimitViolationDeleteManyArgs>(args?: SelectSubset<T, RateLimitViolationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RateLimitViolations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitViolationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RateLimitViolations
     * const rateLimitViolation = await prisma.rateLimitViolation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RateLimitViolationUpdateManyArgs>(args: SelectSubset<T, RateLimitViolationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RateLimitViolations and returns the data updated in the database.
     * @param {RateLimitViolationUpdateManyAndReturnArgs} args - Arguments to update many RateLimitViolations.
     * @example
     * // Update many RateLimitViolations
     * const rateLimitViolation = await prisma.rateLimitViolation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RateLimitViolations and only return the `ip`
     * const rateLimitViolationWithIpOnly = await prisma.rateLimitViolation.updateManyAndReturn({
     *   select: { ip: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RateLimitViolationUpdateManyAndReturnArgs>(args: SelectSubset<T, RateLimitViolationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateLimitViolationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RateLimitViolation.
     * @param {RateLimitViolationUpsertArgs} args - Arguments to update or create a RateLimitViolation.
     * @example
     * // Update or create a RateLimitViolation
     * const rateLimitViolation = await prisma.rateLimitViolation.upsert({
     *   create: {
     *     // ... data to create a RateLimitViolation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RateLimitViolation we want to update
     *   }
     * })
     */
    upsert<T extends RateLimitViolationUpsertArgs>(args: SelectSubset<T, RateLimitViolationUpsertArgs<ExtArgs>>): Prisma__RateLimitViolationClient<$Result.GetResult<Prisma.$RateLimitViolationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RateLimitViolations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitViolationCountArgs} args - Arguments to filter RateLimitViolations to count.
     * @example
     * // Count the number of RateLimitViolations
     * const count = await prisma.rateLimitViolation.count({
     *   where: {
     *     // ... the filter for the RateLimitViolations we want to count
     *   }
     * })
    **/
    count<T extends RateLimitViolationCountArgs>(
      args?: Subset<T, RateLimitViolationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RateLimitViolationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RateLimitViolation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitViolationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RateLimitViolationAggregateArgs>(args: Subset<T, RateLimitViolationAggregateArgs>): Prisma.PrismaPromise<GetRateLimitViolationAggregateType<T>>

    /**
     * Group by RateLimitViolation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitViolationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RateLimitViolationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RateLimitViolationGroupByArgs['orderBy'] }
        : { orderBy?: RateLimitViolationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RateLimitViolationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRateLimitViolationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RateLimitViolation model
   */
  readonly fields: RateLimitViolationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RateLimitViolation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RateLimitViolationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RateLimitViolation model
   */
  interface RateLimitViolationFieldRefs {
    readonly ip: FieldRef<"RateLimitViolation", 'String'>
    readonly violations: FieldRef<"RateLimitViolation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RateLimitViolation findUnique
   */
  export type RateLimitViolationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitViolation
     */
    select?: RateLimitViolationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitViolation
     */
    omit?: RateLimitViolationOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitViolation to fetch.
     */
    where: RateLimitViolationWhereUniqueInput
  }

  /**
   * RateLimitViolation findUniqueOrThrow
   */
  export type RateLimitViolationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitViolation
     */
    select?: RateLimitViolationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitViolation
     */
    omit?: RateLimitViolationOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitViolation to fetch.
     */
    where: RateLimitViolationWhereUniqueInput
  }

  /**
   * RateLimitViolation findFirst
   */
  export type RateLimitViolationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitViolation
     */
    select?: RateLimitViolationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitViolation
     */
    omit?: RateLimitViolationOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitViolation to fetch.
     */
    where?: RateLimitViolationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimitViolations to fetch.
     */
    orderBy?: RateLimitViolationOrderByWithRelationInput | RateLimitViolationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RateLimitViolations.
     */
    cursor?: RateLimitViolationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimitViolations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimitViolations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RateLimitViolations.
     */
    distinct?: RateLimitViolationScalarFieldEnum | RateLimitViolationScalarFieldEnum[]
  }

  /**
   * RateLimitViolation findFirstOrThrow
   */
  export type RateLimitViolationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitViolation
     */
    select?: RateLimitViolationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitViolation
     */
    omit?: RateLimitViolationOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitViolation to fetch.
     */
    where?: RateLimitViolationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimitViolations to fetch.
     */
    orderBy?: RateLimitViolationOrderByWithRelationInput | RateLimitViolationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RateLimitViolations.
     */
    cursor?: RateLimitViolationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimitViolations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimitViolations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RateLimitViolations.
     */
    distinct?: RateLimitViolationScalarFieldEnum | RateLimitViolationScalarFieldEnum[]
  }

  /**
   * RateLimitViolation findMany
   */
  export type RateLimitViolationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitViolation
     */
    select?: RateLimitViolationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitViolation
     */
    omit?: RateLimitViolationOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitViolations to fetch.
     */
    where?: RateLimitViolationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimitViolations to fetch.
     */
    orderBy?: RateLimitViolationOrderByWithRelationInput | RateLimitViolationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RateLimitViolations.
     */
    cursor?: RateLimitViolationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimitViolations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimitViolations.
     */
    skip?: number
    distinct?: RateLimitViolationScalarFieldEnum | RateLimitViolationScalarFieldEnum[]
  }

  /**
   * RateLimitViolation create
   */
  export type RateLimitViolationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitViolation
     */
    select?: RateLimitViolationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitViolation
     */
    omit?: RateLimitViolationOmit<ExtArgs> | null
    /**
     * The data needed to create a RateLimitViolation.
     */
    data: XOR<RateLimitViolationCreateInput, RateLimitViolationUncheckedCreateInput>
  }

  /**
   * RateLimitViolation createMany
   */
  export type RateLimitViolationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RateLimitViolations.
     */
    data: RateLimitViolationCreateManyInput | RateLimitViolationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RateLimitViolation createManyAndReturn
   */
  export type RateLimitViolationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitViolation
     */
    select?: RateLimitViolationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitViolation
     */
    omit?: RateLimitViolationOmit<ExtArgs> | null
    /**
     * The data used to create many RateLimitViolations.
     */
    data: RateLimitViolationCreateManyInput | RateLimitViolationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RateLimitViolation update
   */
  export type RateLimitViolationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitViolation
     */
    select?: RateLimitViolationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitViolation
     */
    omit?: RateLimitViolationOmit<ExtArgs> | null
    /**
     * The data needed to update a RateLimitViolation.
     */
    data: XOR<RateLimitViolationUpdateInput, RateLimitViolationUncheckedUpdateInput>
    /**
     * Choose, which RateLimitViolation to update.
     */
    where: RateLimitViolationWhereUniqueInput
  }

  /**
   * RateLimitViolation updateMany
   */
  export type RateLimitViolationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RateLimitViolations.
     */
    data: XOR<RateLimitViolationUpdateManyMutationInput, RateLimitViolationUncheckedUpdateManyInput>
    /**
     * Filter which RateLimitViolations to update
     */
    where?: RateLimitViolationWhereInput
    /**
     * Limit how many RateLimitViolations to update.
     */
    limit?: number
  }

  /**
   * RateLimitViolation updateManyAndReturn
   */
  export type RateLimitViolationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitViolation
     */
    select?: RateLimitViolationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitViolation
     */
    omit?: RateLimitViolationOmit<ExtArgs> | null
    /**
     * The data used to update RateLimitViolations.
     */
    data: XOR<RateLimitViolationUpdateManyMutationInput, RateLimitViolationUncheckedUpdateManyInput>
    /**
     * Filter which RateLimitViolations to update
     */
    where?: RateLimitViolationWhereInput
    /**
     * Limit how many RateLimitViolations to update.
     */
    limit?: number
  }

  /**
   * RateLimitViolation upsert
   */
  export type RateLimitViolationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitViolation
     */
    select?: RateLimitViolationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitViolation
     */
    omit?: RateLimitViolationOmit<ExtArgs> | null
    /**
     * The filter to search for the RateLimitViolation to update in case it exists.
     */
    where: RateLimitViolationWhereUniqueInput
    /**
     * In case the RateLimitViolation found by the `where` argument doesn't exist, create a new RateLimitViolation with this data.
     */
    create: XOR<RateLimitViolationCreateInput, RateLimitViolationUncheckedCreateInput>
    /**
     * In case the RateLimitViolation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RateLimitViolationUpdateInput, RateLimitViolationUncheckedUpdateInput>
  }

  /**
   * RateLimitViolation delete
   */
  export type RateLimitViolationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitViolation
     */
    select?: RateLimitViolationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitViolation
     */
    omit?: RateLimitViolationOmit<ExtArgs> | null
    /**
     * Filter which RateLimitViolation to delete.
     */
    where: RateLimitViolationWhereUniqueInput
  }

  /**
   * RateLimitViolation deleteMany
   */
  export type RateLimitViolationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RateLimitViolations to delete
     */
    where?: RateLimitViolationWhereInput
    /**
     * Limit how many RateLimitViolations to delete.
     */
    limit?: number
  }

  /**
   * RateLimitViolation without action
   */
  export type RateLimitViolationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitViolation
     */
    select?: RateLimitViolationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitViolation
     */
    omit?: RateLimitViolationOmit<ExtArgs> | null
  }


  /**
   * Model RateLimitBlock
   */

  export type AggregateRateLimitBlock = {
    _count: RateLimitBlockCountAggregateOutputType | null
    _min: RateLimitBlockMinAggregateOutputType | null
    _max: RateLimitBlockMaxAggregateOutputType | null
  }

  export type RateLimitBlockMinAggregateOutputType = {
    ip: string | null
    block_until: Date | null
  }

  export type RateLimitBlockMaxAggregateOutputType = {
    ip: string | null
    block_until: Date | null
  }

  export type RateLimitBlockCountAggregateOutputType = {
    ip: number
    block_until: number
    _all: number
  }


  export type RateLimitBlockMinAggregateInputType = {
    ip?: true
    block_until?: true
  }

  export type RateLimitBlockMaxAggregateInputType = {
    ip?: true
    block_until?: true
  }

  export type RateLimitBlockCountAggregateInputType = {
    ip?: true
    block_until?: true
    _all?: true
  }

  export type RateLimitBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RateLimitBlock to aggregate.
     */
    where?: RateLimitBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimitBlocks to fetch.
     */
    orderBy?: RateLimitBlockOrderByWithRelationInput | RateLimitBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RateLimitBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimitBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimitBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RateLimitBlocks
    **/
    _count?: true | RateLimitBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RateLimitBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RateLimitBlockMaxAggregateInputType
  }

  export type GetRateLimitBlockAggregateType<T extends RateLimitBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateRateLimitBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRateLimitBlock[P]>
      : GetScalarType<T[P], AggregateRateLimitBlock[P]>
  }




  export type RateLimitBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RateLimitBlockWhereInput
    orderBy?: RateLimitBlockOrderByWithAggregationInput | RateLimitBlockOrderByWithAggregationInput[]
    by: RateLimitBlockScalarFieldEnum[] | RateLimitBlockScalarFieldEnum
    having?: RateLimitBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RateLimitBlockCountAggregateInputType | true
    _min?: RateLimitBlockMinAggregateInputType
    _max?: RateLimitBlockMaxAggregateInputType
  }

  export type RateLimitBlockGroupByOutputType = {
    ip: string
    block_until: Date
    _count: RateLimitBlockCountAggregateOutputType | null
    _min: RateLimitBlockMinAggregateOutputType | null
    _max: RateLimitBlockMaxAggregateOutputType | null
  }

  type GetRateLimitBlockGroupByPayload<T extends RateLimitBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RateLimitBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RateLimitBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RateLimitBlockGroupByOutputType[P]>
            : GetScalarType<T[P], RateLimitBlockGroupByOutputType[P]>
        }
      >
    >


  export type RateLimitBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ip?: boolean
    block_until?: boolean
  }, ExtArgs["result"]["rateLimitBlock"]>

  export type RateLimitBlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ip?: boolean
    block_until?: boolean
  }, ExtArgs["result"]["rateLimitBlock"]>

  export type RateLimitBlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ip?: boolean
    block_until?: boolean
  }, ExtArgs["result"]["rateLimitBlock"]>

  export type RateLimitBlockSelectScalar = {
    ip?: boolean
    block_until?: boolean
  }

  export type RateLimitBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ip" | "block_until", ExtArgs["result"]["rateLimitBlock"]>

  export type $RateLimitBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RateLimitBlock"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ip: string
      block_until: Date
    }, ExtArgs["result"]["rateLimitBlock"]>
    composites: {}
  }

  type RateLimitBlockGetPayload<S extends boolean | null | undefined | RateLimitBlockDefaultArgs> = $Result.GetResult<Prisma.$RateLimitBlockPayload, S>

  type RateLimitBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RateLimitBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RateLimitBlockCountAggregateInputType | true
    }

  export interface RateLimitBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RateLimitBlock'], meta: { name: 'RateLimitBlock' } }
    /**
     * Find zero or one RateLimitBlock that matches the filter.
     * @param {RateLimitBlockFindUniqueArgs} args - Arguments to find a RateLimitBlock
     * @example
     * // Get one RateLimitBlock
     * const rateLimitBlock = await prisma.rateLimitBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RateLimitBlockFindUniqueArgs>(args: SelectSubset<T, RateLimitBlockFindUniqueArgs<ExtArgs>>): Prisma__RateLimitBlockClient<$Result.GetResult<Prisma.$RateLimitBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RateLimitBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RateLimitBlockFindUniqueOrThrowArgs} args - Arguments to find a RateLimitBlock
     * @example
     * // Get one RateLimitBlock
     * const rateLimitBlock = await prisma.rateLimitBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RateLimitBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, RateLimitBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RateLimitBlockClient<$Result.GetResult<Prisma.$RateLimitBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RateLimitBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitBlockFindFirstArgs} args - Arguments to find a RateLimitBlock
     * @example
     * // Get one RateLimitBlock
     * const rateLimitBlock = await prisma.rateLimitBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RateLimitBlockFindFirstArgs>(args?: SelectSubset<T, RateLimitBlockFindFirstArgs<ExtArgs>>): Prisma__RateLimitBlockClient<$Result.GetResult<Prisma.$RateLimitBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RateLimitBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitBlockFindFirstOrThrowArgs} args - Arguments to find a RateLimitBlock
     * @example
     * // Get one RateLimitBlock
     * const rateLimitBlock = await prisma.rateLimitBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RateLimitBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, RateLimitBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__RateLimitBlockClient<$Result.GetResult<Prisma.$RateLimitBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RateLimitBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RateLimitBlocks
     * const rateLimitBlocks = await prisma.rateLimitBlock.findMany()
     * 
     * // Get first 10 RateLimitBlocks
     * const rateLimitBlocks = await prisma.rateLimitBlock.findMany({ take: 10 })
     * 
     * // Only select the `ip`
     * const rateLimitBlockWithIpOnly = await prisma.rateLimitBlock.findMany({ select: { ip: true } })
     * 
     */
    findMany<T extends RateLimitBlockFindManyArgs>(args?: SelectSubset<T, RateLimitBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateLimitBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RateLimitBlock.
     * @param {RateLimitBlockCreateArgs} args - Arguments to create a RateLimitBlock.
     * @example
     * // Create one RateLimitBlock
     * const RateLimitBlock = await prisma.rateLimitBlock.create({
     *   data: {
     *     // ... data to create a RateLimitBlock
     *   }
     * })
     * 
     */
    create<T extends RateLimitBlockCreateArgs>(args: SelectSubset<T, RateLimitBlockCreateArgs<ExtArgs>>): Prisma__RateLimitBlockClient<$Result.GetResult<Prisma.$RateLimitBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RateLimitBlocks.
     * @param {RateLimitBlockCreateManyArgs} args - Arguments to create many RateLimitBlocks.
     * @example
     * // Create many RateLimitBlocks
     * const rateLimitBlock = await prisma.rateLimitBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RateLimitBlockCreateManyArgs>(args?: SelectSubset<T, RateLimitBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RateLimitBlocks and returns the data saved in the database.
     * @param {RateLimitBlockCreateManyAndReturnArgs} args - Arguments to create many RateLimitBlocks.
     * @example
     * // Create many RateLimitBlocks
     * const rateLimitBlock = await prisma.rateLimitBlock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RateLimitBlocks and only return the `ip`
     * const rateLimitBlockWithIpOnly = await prisma.rateLimitBlock.createManyAndReturn({
     *   select: { ip: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RateLimitBlockCreateManyAndReturnArgs>(args?: SelectSubset<T, RateLimitBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateLimitBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RateLimitBlock.
     * @param {RateLimitBlockDeleteArgs} args - Arguments to delete one RateLimitBlock.
     * @example
     * // Delete one RateLimitBlock
     * const RateLimitBlock = await prisma.rateLimitBlock.delete({
     *   where: {
     *     // ... filter to delete one RateLimitBlock
     *   }
     * })
     * 
     */
    delete<T extends RateLimitBlockDeleteArgs>(args: SelectSubset<T, RateLimitBlockDeleteArgs<ExtArgs>>): Prisma__RateLimitBlockClient<$Result.GetResult<Prisma.$RateLimitBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RateLimitBlock.
     * @param {RateLimitBlockUpdateArgs} args - Arguments to update one RateLimitBlock.
     * @example
     * // Update one RateLimitBlock
     * const rateLimitBlock = await prisma.rateLimitBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RateLimitBlockUpdateArgs>(args: SelectSubset<T, RateLimitBlockUpdateArgs<ExtArgs>>): Prisma__RateLimitBlockClient<$Result.GetResult<Prisma.$RateLimitBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RateLimitBlocks.
     * @param {RateLimitBlockDeleteManyArgs} args - Arguments to filter RateLimitBlocks to delete.
     * @example
     * // Delete a few RateLimitBlocks
     * const { count } = await prisma.rateLimitBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RateLimitBlockDeleteManyArgs>(args?: SelectSubset<T, RateLimitBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RateLimitBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RateLimitBlocks
     * const rateLimitBlock = await prisma.rateLimitBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RateLimitBlockUpdateManyArgs>(args: SelectSubset<T, RateLimitBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RateLimitBlocks and returns the data updated in the database.
     * @param {RateLimitBlockUpdateManyAndReturnArgs} args - Arguments to update many RateLimitBlocks.
     * @example
     * // Update many RateLimitBlocks
     * const rateLimitBlock = await prisma.rateLimitBlock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RateLimitBlocks and only return the `ip`
     * const rateLimitBlockWithIpOnly = await prisma.rateLimitBlock.updateManyAndReturn({
     *   select: { ip: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RateLimitBlockUpdateManyAndReturnArgs>(args: SelectSubset<T, RateLimitBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateLimitBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RateLimitBlock.
     * @param {RateLimitBlockUpsertArgs} args - Arguments to update or create a RateLimitBlock.
     * @example
     * // Update or create a RateLimitBlock
     * const rateLimitBlock = await prisma.rateLimitBlock.upsert({
     *   create: {
     *     // ... data to create a RateLimitBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RateLimitBlock we want to update
     *   }
     * })
     */
    upsert<T extends RateLimitBlockUpsertArgs>(args: SelectSubset<T, RateLimitBlockUpsertArgs<ExtArgs>>): Prisma__RateLimitBlockClient<$Result.GetResult<Prisma.$RateLimitBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RateLimitBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitBlockCountArgs} args - Arguments to filter RateLimitBlocks to count.
     * @example
     * // Count the number of RateLimitBlocks
     * const count = await prisma.rateLimitBlock.count({
     *   where: {
     *     // ... the filter for the RateLimitBlocks we want to count
     *   }
     * })
    **/
    count<T extends RateLimitBlockCountArgs>(
      args?: Subset<T, RateLimitBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RateLimitBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RateLimitBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RateLimitBlockAggregateArgs>(args: Subset<T, RateLimitBlockAggregateArgs>): Prisma.PrismaPromise<GetRateLimitBlockAggregateType<T>>

    /**
     * Group by RateLimitBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitBlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RateLimitBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RateLimitBlockGroupByArgs['orderBy'] }
        : { orderBy?: RateLimitBlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RateLimitBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRateLimitBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RateLimitBlock model
   */
  readonly fields: RateLimitBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RateLimitBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RateLimitBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RateLimitBlock model
   */
  interface RateLimitBlockFieldRefs {
    readonly ip: FieldRef<"RateLimitBlock", 'String'>
    readonly block_until: FieldRef<"RateLimitBlock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RateLimitBlock findUnique
   */
  export type RateLimitBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitBlock
     */
    select?: RateLimitBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitBlock
     */
    omit?: RateLimitBlockOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitBlock to fetch.
     */
    where: RateLimitBlockWhereUniqueInput
  }

  /**
   * RateLimitBlock findUniqueOrThrow
   */
  export type RateLimitBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitBlock
     */
    select?: RateLimitBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitBlock
     */
    omit?: RateLimitBlockOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitBlock to fetch.
     */
    where: RateLimitBlockWhereUniqueInput
  }

  /**
   * RateLimitBlock findFirst
   */
  export type RateLimitBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitBlock
     */
    select?: RateLimitBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitBlock
     */
    omit?: RateLimitBlockOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitBlock to fetch.
     */
    where?: RateLimitBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimitBlocks to fetch.
     */
    orderBy?: RateLimitBlockOrderByWithRelationInput | RateLimitBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RateLimitBlocks.
     */
    cursor?: RateLimitBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimitBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimitBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RateLimitBlocks.
     */
    distinct?: RateLimitBlockScalarFieldEnum | RateLimitBlockScalarFieldEnum[]
  }

  /**
   * RateLimitBlock findFirstOrThrow
   */
  export type RateLimitBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitBlock
     */
    select?: RateLimitBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitBlock
     */
    omit?: RateLimitBlockOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitBlock to fetch.
     */
    where?: RateLimitBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimitBlocks to fetch.
     */
    orderBy?: RateLimitBlockOrderByWithRelationInput | RateLimitBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RateLimitBlocks.
     */
    cursor?: RateLimitBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimitBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimitBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RateLimitBlocks.
     */
    distinct?: RateLimitBlockScalarFieldEnum | RateLimitBlockScalarFieldEnum[]
  }

  /**
   * RateLimitBlock findMany
   */
  export type RateLimitBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitBlock
     */
    select?: RateLimitBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitBlock
     */
    omit?: RateLimitBlockOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitBlocks to fetch.
     */
    where?: RateLimitBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimitBlocks to fetch.
     */
    orderBy?: RateLimitBlockOrderByWithRelationInput | RateLimitBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RateLimitBlocks.
     */
    cursor?: RateLimitBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimitBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimitBlocks.
     */
    skip?: number
    distinct?: RateLimitBlockScalarFieldEnum | RateLimitBlockScalarFieldEnum[]
  }

  /**
   * RateLimitBlock create
   */
  export type RateLimitBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitBlock
     */
    select?: RateLimitBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitBlock
     */
    omit?: RateLimitBlockOmit<ExtArgs> | null
    /**
     * The data needed to create a RateLimitBlock.
     */
    data: XOR<RateLimitBlockCreateInput, RateLimitBlockUncheckedCreateInput>
  }

  /**
   * RateLimitBlock createMany
   */
  export type RateLimitBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RateLimitBlocks.
     */
    data: RateLimitBlockCreateManyInput | RateLimitBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RateLimitBlock createManyAndReturn
   */
  export type RateLimitBlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitBlock
     */
    select?: RateLimitBlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitBlock
     */
    omit?: RateLimitBlockOmit<ExtArgs> | null
    /**
     * The data used to create many RateLimitBlocks.
     */
    data: RateLimitBlockCreateManyInput | RateLimitBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RateLimitBlock update
   */
  export type RateLimitBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitBlock
     */
    select?: RateLimitBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitBlock
     */
    omit?: RateLimitBlockOmit<ExtArgs> | null
    /**
     * The data needed to update a RateLimitBlock.
     */
    data: XOR<RateLimitBlockUpdateInput, RateLimitBlockUncheckedUpdateInput>
    /**
     * Choose, which RateLimitBlock to update.
     */
    where: RateLimitBlockWhereUniqueInput
  }

  /**
   * RateLimitBlock updateMany
   */
  export type RateLimitBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RateLimitBlocks.
     */
    data: XOR<RateLimitBlockUpdateManyMutationInput, RateLimitBlockUncheckedUpdateManyInput>
    /**
     * Filter which RateLimitBlocks to update
     */
    where?: RateLimitBlockWhereInput
    /**
     * Limit how many RateLimitBlocks to update.
     */
    limit?: number
  }

  /**
   * RateLimitBlock updateManyAndReturn
   */
  export type RateLimitBlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitBlock
     */
    select?: RateLimitBlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitBlock
     */
    omit?: RateLimitBlockOmit<ExtArgs> | null
    /**
     * The data used to update RateLimitBlocks.
     */
    data: XOR<RateLimitBlockUpdateManyMutationInput, RateLimitBlockUncheckedUpdateManyInput>
    /**
     * Filter which RateLimitBlocks to update
     */
    where?: RateLimitBlockWhereInput
    /**
     * Limit how many RateLimitBlocks to update.
     */
    limit?: number
  }

  /**
   * RateLimitBlock upsert
   */
  export type RateLimitBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitBlock
     */
    select?: RateLimitBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitBlock
     */
    omit?: RateLimitBlockOmit<ExtArgs> | null
    /**
     * The filter to search for the RateLimitBlock to update in case it exists.
     */
    where: RateLimitBlockWhereUniqueInput
    /**
     * In case the RateLimitBlock found by the `where` argument doesn't exist, create a new RateLimitBlock with this data.
     */
    create: XOR<RateLimitBlockCreateInput, RateLimitBlockUncheckedCreateInput>
    /**
     * In case the RateLimitBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RateLimitBlockUpdateInput, RateLimitBlockUncheckedUpdateInput>
  }

  /**
   * RateLimitBlock delete
   */
  export type RateLimitBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitBlock
     */
    select?: RateLimitBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitBlock
     */
    omit?: RateLimitBlockOmit<ExtArgs> | null
    /**
     * Filter which RateLimitBlock to delete.
     */
    where: RateLimitBlockWhereUniqueInput
  }

  /**
   * RateLimitBlock deleteMany
   */
  export type RateLimitBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RateLimitBlocks to delete
     */
    where?: RateLimitBlockWhereInput
    /**
     * Limit how many RateLimitBlocks to delete.
     */
    limit?: number
  }

  /**
   * RateLimitBlock without action
   */
  export type RateLimitBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitBlock
     */
    select?: RateLimitBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitBlock
     */
    omit?: RateLimitBlockOmit<ExtArgs> | null
  }


  /**
   * Model UserGameStatus
   */

  export type AggregateUserGameStatus = {
    _count: UserGameStatusCountAggregateOutputType | null
    _avg: UserGameStatusAvgAggregateOutputType | null
    _sum: UserGameStatusSumAggregateOutputType | null
    _min: UserGameStatusMinAggregateOutputType | null
    _max: UserGameStatusMaxAggregateOutputType | null
  }

  export type UserGameStatusAvgAggregateOutputType = {
    id: number | null
    gameId: number | null
  }

  export type UserGameStatusSumAggregateOutputType = {
    id: number | null
    gameId: number | null
  }

  export type UserGameStatusMinAggregateOutputType = {
    id: number | null
    userId: string | null
    gameId: number | null
    status: string | null
    progress: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserGameStatusMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    gameId: number | null
    status: string | null
    progress: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserGameStatusCountAggregateOutputType = {
    id: number
    userId: number
    gameId: number
    status: number
    progress: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserGameStatusAvgAggregateInputType = {
    id?: true
    gameId?: true
  }

  export type UserGameStatusSumAggregateInputType = {
    id?: true
    gameId?: true
  }

  export type UserGameStatusMinAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    status?: true
    progress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserGameStatusMaxAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    status?: true
    progress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserGameStatusCountAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    status?: true
    progress?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserGameStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGameStatus to aggregate.
     */
    where?: UserGameStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGameStatuses to fetch.
     */
    orderBy?: UserGameStatusOrderByWithRelationInput | UserGameStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGameStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGameStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGameStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGameStatuses
    **/
    _count?: true | UserGameStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserGameStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserGameStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGameStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGameStatusMaxAggregateInputType
  }

  export type GetUserGameStatusAggregateType<T extends UserGameStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGameStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGameStatus[P]>
      : GetScalarType<T[P], AggregateUserGameStatus[P]>
  }




  export type UserGameStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGameStatusWhereInput
    orderBy?: UserGameStatusOrderByWithAggregationInput | UserGameStatusOrderByWithAggregationInput[]
    by: UserGameStatusScalarFieldEnum[] | UserGameStatusScalarFieldEnum
    having?: UserGameStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGameStatusCountAggregateInputType | true
    _avg?: UserGameStatusAvgAggregateInputType
    _sum?: UserGameStatusSumAggregateInputType
    _min?: UserGameStatusMinAggregateInputType
    _max?: UserGameStatusMaxAggregateInputType
  }

  export type UserGameStatusGroupByOutputType = {
    id: number
    userId: string
    gameId: number
    status: string
    progress: string
    createdAt: Date
    updatedAt: Date
    _count: UserGameStatusCountAggregateOutputType | null
    _avg: UserGameStatusAvgAggregateOutputType | null
    _sum: UserGameStatusSumAggregateOutputType | null
    _min: UserGameStatusMinAggregateOutputType | null
    _max: UserGameStatusMaxAggregateOutputType | null
  }

  type GetUserGameStatusGroupByPayload<T extends UserGameStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGameStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGameStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGameStatusGroupByOutputType[P]>
            : GetScalarType<T[P], UserGameStatusGroupByOutputType[P]>
        }
      >
    >


  export type UserGameStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameId?: boolean
    status?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGameStatus"]>

  export type UserGameStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameId?: boolean
    status?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGameStatus"]>

  export type UserGameStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameId?: boolean
    status?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGameStatus"]>

  export type UserGameStatusSelectScalar = {
    id?: boolean
    userId?: boolean
    gameId?: boolean
    status?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserGameStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "gameId" | "status" | "progress" | "createdAt" | "updatedAt", ExtArgs["result"]["userGameStatus"]>
  export type UserGameStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type UserGameStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type UserGameStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $UserGameStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserGameStatus"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      gameId: number
      status: string
      progress: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userGameStatus"]>
    composites: {}
  }

  type UserGameStatusGetPayload<S extends boolean | null | undefined | UserGameStatusDefaultArgs> = $Result.GetResult<Prisma.$UserGameStatusPayload, S>

  type UserGameStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserGameStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserGameStatusCountAggregateInputType | true
    }

  export interface UserGameStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGameStatus'], meta: { name: 'UserGameStatus' } }
    /**
     * Find zero or one UserGameStatus that matches the filter.
     * @param {UserGameStatusFindUniqueArgs} args - Arguments to find a UserGameStatus
     * @example
     * // Get one UserGameStatus
     * const userGameStatus = await prisma.userGameStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserGameStatusFindUniqueArgs>(args: SelectSubset<T, UserGameStatusFindUniqueArgs<ExtArgs>>): Prisma__UserGameStatusClient<$Result.GetResult<Prisma.$UserGameStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserGameStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserGameStatusFindUniqueOrThrowArgs} args - Arguments to find a UserGameStatus
     * @example
     * // Get one UserGameStatus
     * const userGameStatus = await prisma.userGameStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserGameStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, UserGameStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserGameStatusClient<$Result.GetResult<Prisma.$UserGameStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGameStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameStatusFindFirstArgs} args - Arguments to find a UserGameStatus
     * @example
     * // Get one UserGameStatus
     * const userGameStatus = await prisma.userGameStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserGameStatusFindFirstArgs>(args?: SelectSubset<T, UserGameStatusFindFirstArgs<ExtArgs>>): Prisma__UserGameStatusClient<$Result.GetResult<Prisma.$UserGameStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGameStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameStatusFindFirstOrThrowArgs} args - Arguments to find a UserGameStatus
     * @example
     * // Get one UserGameStatus
     * const userGameStatus = await prisma.userGameStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserGameStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, UserGameStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserGameStatusClient<$Result.GetResult<Prisma.$UserGameStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserGameStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGameStatuses
     * const userGameStatuses = await prisma.userGameStatus.findMany()
     * 
     * // Get first 10 UserGameStatuses
     * const userGameStatuses = await prisma.userGameStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userGameStatusWithIdOnly = await prisma.userGameStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserGameStatusFindManyArgs>(args?: SelectSubset<T, UserGameStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGameStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserGameStatus.
     * @param {UserGameStatusCreateArgs} args - Arguments to create a UserGameStatus.
     * @example
     * // Create one UserGameStatus
     * const UserGameStatus = await prisma.userGameStatus.create({
     *   data: {
     *     // ... data to create a UserGameStatus
     *   }
     * })
     * 
     */
    create<T extends UserGameStatusCreateArgs>(args: SelectSubset<T, UserGameStatusCreateArgs<ExtArgs>>): Prisma__UserGameStatusClient<$Result.GetResult<Prisma.$UserGameStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserGameStatuses.
     * @param {UserGameStatusCreateManyArgs} args - Arguments to create many UserGameStatuses.
     * @example
     * // Create many UserGameStatuses
     * const userGameStatus = await prisma.userGameStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserGameStatusCreateManyArgs>(args?: SelectSubset<T, UserGameStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserGameStatuses and returns the data saved in the database.
     * @param {UserGameStatusCreateManyAndReturnArgs} args - Arguments to create many UserGameStatuses.
     * @example
     * // Create many UserGameStatuses
     * const userGameStatus = await prisma.userGameStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserGameStatuses and only return the `id`
     * const userGameStatusWithIdOnly = await prisma.userGameStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserGameStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, UserGameStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGameStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserGameStatus.
     * @param {UserGameStatusDeleteArgs} args - Arguments to delete one UserGameStatus.
     * @example
     * // Delete one UserGameStatus
     * const UserGameStatus = await prisma.userGameStatus.delete({
     *   where: {
     *     // ... filter to delete one UserGameStatus
     *   }
     * })
     * 
     */
    delete<T extends UserGameStatusDeleteArgs>(args: SelectSubset<T, UserGameStatusDeleteArgs<ExtArgs>>): Prisma__UserGameStatusClient<$Result.GetResult<Prisma.$UserGameStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserGameStatus.
     * @param {UserGameStatusUpdateArgs} args - Arguments to update one UserGameStatus.
     * @example
     * // Update one UserGameStatus
     * const userGameStatus = await prisma.userGameStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserGameStatusUpdateArgs>(args: SelectSubset<T, UserGameStatusUpdateArgs<ExtArgs>>): Prisma__UserGameStatusClient<$Result.GetResult<Prisma.$UserGameStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserGameStatuses.
     * @param {UserGameStatusDeleteManyArgs} args - Arguments to filter UserGameStatuses to delete.
     * @example
     * // Delete a few UserGameStatuses
     * const { count } = await prisma.userGameStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserGameStatusDeleteManyArgs>(args?: SelectSubset<T, UserGameStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGameStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGameStatuses
     * const userGameStatus = await prisma.userGameStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserGameStatusUpdateManyArgs>(args: SelectSubset<T, UserGameStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGameStatuses and returns the data updated in the database.
     * @param {UserGameStatusUpdateManyAndReturnArgs} args - Arguments to update many UserGameStatuses.
     * @example
     * // Update many UserGameStatuses
     * const userGameStatus = await prisma.userGameStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserGameStatuses and only return the `id`
     * const userGameStatusWithIdOnly = await prisma.userGameStatus.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserGameStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, UserGameStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGameStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserGameStatus.
     * @param {UserGameStatusUpsertArgs} args - Arguments to update or create a UserGameStatus.
     * @example
     * // Update or create a UserGameStatus
     * const userGameStatus = await prisma.userGameStatus.upsert({
     *   create: {
     *     // ... data to create a UserGameStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGameStatus we want to update
     *   }
     * })
     */
    upsert<T extends UserGameStatusUpsertArgs>(args: SelectSubset<T, UserGameStatusUpsertArgs<ExtArgs>>): Prisma__UserGameStatusClient<$Result.GetResult<Prisma.$UserGameStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserGameStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameStatusCountArgs} args - Arguments to filter UserGameStatuses to count.
     * @example
     * // Count the number of UserGameStatuses
     * const count = await prisma.userGameStatus.count({
     *   where: {
     *     // ... the filter for the UserGameStatuses we want to count
     *   }
     * })
    **/
    count<T extends UserGameStatusCountArgs>(
      args?: Subset<T, UserGameStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGameStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGameStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserGameStatusAggregateArgs>(args: Subset<T, UserGameStatusAggregateArgs>): Prisma.PrismaPromise<GetUserGameStatusAggregateType<T>>

    /**
     * Group by UserGameStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGameStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGameStatusGroupByArgs['orderBy'] }
        : { orderBy?: UserGameStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGameStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGameStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGameStatus model
   */
  readonly fields: UserGameStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGameStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGameStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserGameStatus model
   */
  interface UserGameStatusFieldRefs {
    readonly id: FieldRef<"UserGameStatus", 'Int'>
    readonly userId: FieldRef<"UserGameStatus", 'String'>
    readonly gameId: FieldRef<"UserGameStatus", 'Int'>
    readonly status: FieldRef<"UserGameStatus", 'String'>
    readonly progress: FieldRef<"UserGameStatus", 'String'>
    readonly createdAt: FieldRef<"UserGameStatus", 'DateTime'>
    readonly updatedAt: FieldRef<"UserGameStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserGameStatus findUnique
   */
  export type UserGameStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStatus
     */
    select?: UserGameStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameStatus
     */
    omit?: UserGameStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameStatusInclude<ExtArgs> | null
    /**
     * Filter, which UserGameStatus to fetch.
     */
    where: UserGameStatusWhereUniqueInput
  }

  /**
   * UserGameStatus findUniqueOrThrow
   */
  export type UserGameStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStatus
     */
    select?: UserGameStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameStatus
     */
    omit?: UserGameStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameStatusInclude<ExtArgs> | null
    /**
     * Filter, which UserGameStatus to fetch.
     */
    where: UserGameStatusWhereUniqueInput
  }

  /**
   * UserGameStatus findFirst
   */
  export type UserGameStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStatus
     */
    select?: UserGameStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameStatus
     */
    omit?: UserGameStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameStatusInclude<ExtArgs> | null
    /**
     * Filter, which UserGameStatus to fetch.
     */
    where?: UserGameStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGameStatuses to fetch.
     */
    orderBy?: UserGameStatusOrderByWithRelationInput | UserGameStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGameStatuses.
     */
    cursor?: UserGameStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGameStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGameStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGameStatuses.
     */
    distinct?: UserGameStatusScalarFieldEnum | UserGameStatusScalarFieldEnum[]
  }

  /**
   * UserGameStatus findFirstOrThrow
   */
  export type UserGameStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStatus
     */
    select?: UserGameStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameStatus
     */
    omit?: UserGameStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameStatusInclude<ExtArgs> | null
    /**
     * Filter, which UserGameStatus to fetch.
     */
    where?: UserGameStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGameStatuses to fetch.
     */
    orderBy?: UserGameStatusOrderByWithRelationInput | UserGameStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGameStatuses.
     */
    cursor?: UserGameStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGameStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGameStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGameStatuses.
     */
    distinct?: UserGameStatusScalarFieldEnum | UserGameStatusScalarFieldEnum[]
  }

  /**
   * UserGameStatus findMany
   */
  export type UserGameStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStatus
     */
    select?: UserGameStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameStatus
     */
    omit?: UserGameStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameStatusInclude<ExtArgs> | null
    /**
     * Filter, which UserGameStatuses to fetch.
     */
    where?: UserGameStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGameStatuses to fetch.
     */
    orderBy?: UserGameStatusOrderByWithRelationInput | UserGameStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGameStatuses.
     */
    cursor?: UserGameStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGameStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGameStatuses.
     */
    skip?: number
    distinct?: UserGameStatusScalarFieldEnum | UserGameStatusScalarFieldEnum[]
  }

  /**
   * UserGameStatus create
   */
  export type UserGameStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStatus
     */
    select?: UserGameStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameStatus
     */
    omit?: UserGameStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a UserGameStatus.
     */
    data: XOR<UserGameStatusCreateInput, UserGameStatusUncheckedCreateInput>
  }

  /**
   * UserGameStatus createMany
   */
  export type UserGameStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGameStatuses.
     */
    data: UserGameStatusCreateManyInput | UserGameStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGameStatus createManyAndReturn
   */
  export type UserGameStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStatus
     */
    select?: UserGameStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameStatus
     */
    omit?: UserGameStatusOmit<ExtArgs> | null
    /**
     * The data used to create many UserGameStatuses.
     */
    data: UserGameStatusCreateManyInput | UserGameStatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGameStatus update
   */
  export type UserGameStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStatus
     */
    select?: UserGameStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameStatus
     */
    omit?: UserGameStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a UserGameStatus.
     */
    data: XOR<UserGameStatusUpdateInput, UserGameStatusUncheckedUpdateInput>
    /**
     * Choose, which UserGameStatus to update.
     */
    where: UserGameStatusWhereUniqueInput
  }

  /**
   * UserGameStatus updateMany
   */
  export type UserGameStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGameStatuses.
     */
    data: XOR<UserGameStatusUpdateManyMutationInput, UserGameStatusUncheckedUpdateManyInput>
    /**
     * Filter which UserGameStatuses to update
     */
    where?: UserGameStatusWhereInput
    /**
     * Limit how many UserGameStatuses to update.
     */
    limit?: number
  }

  /**
   * UserGameStatus updateManyAndReturn
   */
  export type UserGameStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStatus
     */
    select?: UserGameStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameStatus
     */
    omit?: UserGameStatusOmit<ExtArgs> | null
    /**
     * The data used to update UserGameStatuses.
     */
    data: XOR<UserGameStatusUpdateManyMutationInput, UserGameStatusUncheckedUpdateManyInput>
    /**
     * Filter which UserGameStatuses to update
     */
    where?: UserGameStatusWhereInput
    /**
     * Limit how many UserGameStatuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameStatusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGameStatus upsert
   */
  export type UserGameStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStatus
     */
    select?: UserGameStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameStatus
     */
    omit?: UserGameStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the UserGameStatus to update in case it exists.
     */
    where: UserGameStatusWhereUniqueInput
    /**
     * In case the UserGameStatus found by the `where` argument doesn't exist, create a new UserGameStatus with this data.
     */
    create: XOR<UserGameStatusCreateInput, UserGameStatusUncheckedCreateInput>
    /**
     * In case the UserGameStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGameStatusUpdateInput, UserGameStatusUncheckedUpdateInput>
  }

  /**
   * UserGameStatus delete
   */
  export type UserGameStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStatus
     */
    select?: UserGameStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameStatus
     */
    omit?: UserGameStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameStatusInclude<ExtArgs> | null
    /**
     * Filter which UserGameStatus to delete.
     */
    where: UserGameStatusWhereUniqueInput
  }

  /**
   * UserGameStatus deleteMany
   */
  export type UserGameStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGameStatuses to delete
     */
    where?: UserGameStatusWhereInput
    /**
     * Limit how many UserGameStatuses to delete.
     */
    limit?: number
  }

  /**
   * UserGameStatus without action
   */
  export type UserGameStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGameStatus
     */
    select?: UserGameStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGameStatus
     */
    omit?: UserGameStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameStatusInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    issuedAt: 'issuedAt',
    revokedAt: 'revokedAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    role: 'role',
    createdAt: 'createdAt',
    username: 'username',
    password: 'password',
    hashedPassword: 'hashedPassword'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    name: 'name',
    steamAppId: 'steamAppId',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const UserGameScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gameId: 'gameId',
    playtimeMinutes: 'playtimeMinutes',
    lastPlayedAt: 'lastPlayedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserGameScalarFieldEnum = (typeof UserGameScalarFieldEnum)[keyof typeof UserGameScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const RateLimitRequestScalarFieldEnum: {
    id: 'id',
    ip: 'ip',
    timestamp: 'timestamp'
  };

  export type RateLimitRequestScalarFieldEnum = (typeof RateLimitRequestScalarFieldEnum)[keyof typeof RateLimitRequestScalarFieldEnum]


  export const RateLimitViolationScalarFieldEnum: {
    ip: 'ip',
    violations: 'violations'
  };

  export type RateLimitViolationScalarFieldEnum = (typeof RateLimitViolationScalarFieldEnum)[keyof typeof RateLimitViolationScalarFieldEnum]


  export const RateLimitBlockScalarFieldEnum: {
    ip: 'ip',
    block_until: 'block_until'
  };

  export type RateLimitBlockScalarFieldEnum = (typeof RateLimitBlockScalarFieldEnum)[keyof typeof RateLimitBlockScalarFieldEnum]


  export const UserGameStatusScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gameId: 'gameId',
    status: 'status',
    progress: 'progress',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserGameStatusScalarFieldEnum = (typeof UserGameStatusScalarFieldEnum)[keyof typeof UserGameStatusScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AuthRole'
   */
  export type EnumAuthRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthRole'>
    


  /**
   * Reference to a field of type 'AuthRole[]'
   */
  export type ListEnumAuthRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: UuidFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: UuidFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    issuedAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    issuedAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: UuidFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    issuedAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    issuedAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: UuidWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    issuedAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableWithAggregatesFilter<"RefreshToken"> | Date | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumAuthRoleFilter<"User"> | $Enums.AuthRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    username?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    hashedPassword?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    gameStatus?: UserGameStatusListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    userGames?: UserGameListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    gameStatus?: UserGameStatusOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    userGames?: UserGameOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumAuthRoleFilter<"User"> | $Enums.AuthRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    password?: StringNullableFilter<"User"> | string | null
    hashedPassword?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    gameStatus?: UserGameStatusListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    userGames?: UserGameListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumAuthRoleWithAggregatesFilter<"User"> | $Enums.AuthRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    hashedPassword?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: UuidFilter<"Account"> | string
    userId?: UuidFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: UuidFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Account"> | string
    userId?: UuidWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: IntFilter<"Game"> | number
    name?: StringFilter<"Game"> | string
    steamAppId?: StringNullableFilter<"Game"> | string | null
    imageUrl?: StringNullableFilter<"Game"> | string | null
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    userGames?: UserGameListRelationFilter
    gameStatuses?: UserGameStatusListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    steamAppId?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userGames?: UserGameOrderByRelationAggregateInput
    gameStatuses?: UserGameStatusOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    steamAppId?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    name?: StringFilter<"Game"> | string
    imageUrl?: StringNullableFilter<"Game"> | string | null
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    userGames?: UserGameListRelationFilter
    gameStatuses?: UserGameStatusListRelationFilter
  }, "id" | "steamAppId">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    steamAppId?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Game"> | number
    name?: StringWithAggregatesFilter<"Game"> | string
    steamAppId?: StringNullableWithAggregatesFilter<"Game"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Game"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
  }

  export type UserGameWhereInput = {
    AND?: UserGameWhereInput | UserGameWhereInput[]
    OR?: UserGameWhereInput[]
    NOT?: UserGameWhereInput | UserGameWhereInput[]
    id?: IntFilter<"UserGame"> | number
    userId?: UuidFilter<"UserGame"> | string
    gameId?: IntFilter<"UserGame"> | number
    playtimeMinutes?: IntFilter<"UserGame"> | number
    lastPlayedAt?: DateTimeNullableFilter<"UserGame"> | Date | string | null
    createdAt?: DateTimeFilter<"UserGame"> | Date | string
    updatedAt?: DateTimeFilter<"UserGame"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type UserGameOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    playtimeMinutes?: SortOrder
    lastPlayedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    game?: GameOrderByWithRelationInput
  }

  export type UserGameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_gameId?: UserGameUserIdGameIdCompoundUniqueInput
    AND?: UserGameWhereInput | UserGameWhereInput[]
    OR?: UserGameWhereInput[]
    NOT?: UserGameWhereInput | UserGameWhereInput[]
    userId?: UuidFilter<"UserGame"> | string
    gameId?: IntFilter<"UserGame"> | number
    playtimeMinutes?: IntFilter<"UserGame"> | number
    lastPlayedAt?: DateTimeNullableFilter<"UserGame"> | Date | string | null
    createdAt?: DateTimeFilter<"UserGame"> | Date | string
    updatedAt?: DateTimeFilter<"UserGame"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id" | "userId_gameId">

  export type UserGameOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    playtimeMinutes?: SortOrder
    lastPlayedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserGameCountOrderByAggregateInput
    _avg?: UserGameAvgOrderByAggregateInput
    _max?: UserGameMaxOrderByAggregateInput
    _min?: UserGameMinOrderByAggregateInput
    _sum?: UserGameSumOrderByAggregateInput
  }

  export type UserGameScalarWhereWithAggregatesInput = {
    AND?: UserGameScalarWhereWithAggregatesInput | UserGameScalarWhereWithAggregatesInput[]
    OR?: UserGameScalarWhereWithAggregatesInput[]
    NOT?: UserGameScalarWhereWithAggregatesInput | UserGameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserGame"> | number
    userId?: UuidWithAggregatesFilter<"UserGame"> | string
    gameId?: IntWithAggregatesFilter<"UserGame"> | number
    playtimeMinutes?: IntWithAggregatesFilter<"UserGame"> | number
    lastPlayedAt?: DateTimeNullableWithAggregatesFilter<"UserGame"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserGame"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserGame"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type RateLimitRequestWhereInput = {
    AND?: RateLimitRequestWhereInput | RateLimitRequestWhereInput[]
    OR?: RateLimitRequestWhereInput[]
    NOT?: RateLimitRequestWhereInput | RateLimitRequestWhereInput[]
    id?: IntFilter<"RateLimitRequest"> | number
    ip?: StringFilter<"RateLimitRequest"> | string
    timestamp?: DateTimeFilter<"RateLimitRequest"> | Date | string
  }

  export type RateLimitRequestOrderByWithRelationInput = {
    id?: SortOrder
    ip?: SortOrder
    timestamp?: SortOrder
  }

  export type RateLimitRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RateLimitRequestWhereInput | RateLimitRequestWhereInput[]
    OR?: RateLimitRequestWhereInput[]
    NOT?: RateLimitRequestWhereInput | RateLimitRequestWhereInput[]
    ip?: StringFilter<"RateLimitRequest"> | string
    timestamp?: DateTimeFilter<"RateLimitRequest"> | Date | string
  }, "id">

  export type RateLimitRequestOrderByWithAggregationInput = {
    id?: SortOrder
    ip?: SortOrder
    timestamp?: SortOrder
    _count?: RateLimitRequestCountOrderByAggregateInput
    _avg?: RateLimitRequestAvgOrderByAggregateInput
    _max?: RateLimitRequestMaxOrderByAggregateInput
    _min?: RateLimitRequestMinOrderByAggregateInput
    _sum?: RateLimitRequestSumOrderByAggregateInput
  }

  export type RateLimitRequestScalarWhereWithAggregatesInput = {
    AND?: RateLimitRequestScalarWhereWithAggregatesInput | RateLimitRequestScalarWhereWithAggregatesInput[]
    OR?: RateLimitRequestScalarWhereWithAggregatesInput[]
    NOT?: RateLimitRequestScalarWhereWithAggregatesInput | RateLimitRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RateLimitRequest"> | number
    ip?: StringWithAggregatesFilter<"RateLimitRequest"> | string
    timestamp?: DateTimeWithAggregatesFilter<"RateLimitRequest"> | Date | string
  }

  export type RateLimitViolationWhereInput = {
    AND?: RateLimitViolationWhereInput | RateLimitViolationWhereInput[]
    OR?: RateLimitViolationWhereInput[]
    NOT?: RateLimitViolationWhereInput | RateLimitViolationWhereInput[]
    ip?: StringFilter<"RateLimitViolation"> | string
    violations?: IntFilter<"RateLimitViolation"> | number
  }

  export type RateLimitViolationOrderByWithRelationInput = {
    ip?: SortOrder
    violations?: SortOrder
  }

  export type RateLimitViolationWhereUniqueInput = Prisma.AtLeast<{
    ip?: string
    AND?: RateLimitViolationWhereInput | RateLimitViolationWhereInput[]
    OR?: RateLimitViolationWhereInput[]
    NOT?: RateLimitViolationWhereInput | RateLimitViolationWhereInput[]
    violations?: IntFilter<"RateLimitViolation"> | number
  }, "ip">

  export type RateLimitViolationOrderByWithAggregationInput = {
    ip?: SortOrder
    violations?: SortOrder
    _count?: RateLimitViolationCountOrderByAggregateInput
    _avg?: RateLimitViolationAvgOrderByAggregateInput
    _max?: RateLimitViolationMaxOrderByAggregateInput
    _min?: RateLimitViolationMinOrderByAggregateInput
    _sum?: RateLimitViolationSumOrderByAggregateInput
  }

  export type RateLimitViolationScalarWhereWithAggregatesInput = {
    AND?: RateLimitViolationScalarWhereWithAggregatesInput | RateLimitViolationScalarWhereWithAggregatesInput[]
    OR?: RateLimitViolationScalarWhereWithAggregatesInput[]
    NOT?: RateLimitViolationScalarWhereWithAggregatesInput | RateLimitViolationScalarWhereWithAggregatesInput[]
    ip?: StringWithAggregatesFilter<"RateLimitViolation"> | string
    violations?: IntWithAggregatesFilter<"RateLimitViolation"> | number
  }

  export type RateLimitBlockWhereInput = {
    AND?: RateLimitBlockWhereInput | RateLimitBlockWhereInput[]
    OR?: RateLimitBlockWhereInput[]
    NOT?: RateLimitBlockWhereInput | RateLimitBlockWhereInput[]
    ip?: StringFilter<"RateLimitBlock"> | string
    block_until?: DateTimeFilter<"RateLimitBlock"> | Date | string
  }

  export type RateLimitBlockOrderByWithRelationInput = {
    ip?: SortOrder
    block_until?: SortOrder
  }

  export type RateLimitBlockWhereUniqueInput = Prisma.AtLeast<{
    ip?: string
    AND?: RateLimitBlockWhereInput | RateLimitBlockWhereInput[]
    OR?: RateLimitBlockWhereInput[]
    NOT?: RateLimitBlockWhereInput | RateLimitBlockWhereInput[]
    block_until?: DateTimeFilter<"RateLimitBlock"> | Date | string
  }, "ip">

  export type RateLimitBlockOrderByWithAggregationInput = {
    ip?: SortOrder
    block_until?: SortOrder
    _count?: RateLimitBlockCountOrderByAggregateInput
    _max?: RateLimitBlockMaxOrderByAggregateInput
    _min?: RateLimitBlockMinOrderByAggregateInput
  }

  export type RateLimitBlockScalarWhereWithAggregatesInput = {
    AND?: RateLimitBlockScalarWhereWithAggregatesInput | RateLimitBlockScalarWhereWithAggregatesInput[]
    OR?: RateLimitBlockScalarWhereWithAggregatesInput[]
    NOT?: RateLimitBlockScalarWhereWithAggregatesInput | RateLimitBlockScalarWhereWithAggregatesInput[]
    ip?: StringWithAggregatesFilter<"RateLimitBlock"> | string
    block_until?: DateTimeWithAggregatesFilter<"RateLimitBlock"> | Date | string
  }

  export type UserGameStatusWhereInput = {
    AND?: UserGameStatusWhereInput | UserGameStatusWhereInput[]
    OR?: UserGameStatusWhereInput[]
    NOT?: UserGameStatusWhereInput | UserGameStatusWhereInput[]
    id?: IntFilter<"UserGameStatus"> | number
    userId?: UuidFilter<"UserGameStatus"> | string
    gameId?: IntFilter<"UserGameStatus"> | number
    status?: StringFilter<"UserGameStatus"> | string
    progress?: StringFilter<"UserGameStatus"> | string
    createdAt?: DateTimeFilter<"UserGameStatus"> | Date | string
    updatedAt?: DateTimeFilter<"UserGameStatus"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type UserGameStatusOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    game?: GameOrderByWithRelationInput
  }

  export type UserGameStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_gameId?: UserGameStatusUserIdGameIdCompoundUniqueInput
    AND?: UserGameStatusWhereInput | UserGameStatusWhereInput[]
    OR?: UserGameStatusWhereInput[]
    NOT?: UserGameStatusWhereInput | UserGameStatusWhereInput[]
    userId?: UuidFilter<"UserGameStatus"> | string
    gameId?: IntFilter<"UserGameStatus"> | number
    status?: StringFilter<"UserGameStatus"> | string
    progress?: StringFilter<"UserGameStatus"> | string
    createdAt?: DateTimeFilter<"UserGameStatus"> | Date | string
    updatedAt?: DateTimeFilter<"UserGameStatus"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id" | "userId_gameId">

  export type UserGameStatusOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserGameStatusCountOrderByAggregateInput
    _avg?: UserGameStatusAvgOrderByAggregateInput
    _max?: UserGameStatusMaxOrderByAggregateInput
    _min?: UserGameStatusMinOrderByAggregateInput
    _sum?: UserGameStatusSumOrderByAggregateInput
  }

  export type UserGameStatusScalarWhereWithAggregatesInput = {
    AND?: UserGameStatusScalarWhereWithAggregatesInput | UserGameStatusScalarWhereWithAggregatesInput[]
    OR?: UserGameStatusScalarWhereWithAggregatesInput[]
    NOT?: UserGameStatusScalarWhereWithAggregatesInput | UserGameStatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserGameStatus"> | number
    userId?: UuidWithAggregatesFilter<"UserGameStatus"> | string
    gameId?: IntWithAggregatesFilter<"UserGameStatus"> | number
    status?: StringWithAggregatesFilter<"UserGameStatus"> | string
    progress?: StringWithAggregatesFilter<"UserGameStatus"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserGameStatus"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserGameStatus"> | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    issuedAt?: Date | string
    revokedAt?: Date | string | null
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    issuedAt?: Date | string
    revokedAt?: Date | string | null
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    issuedAt?: Date | string
    revokedAt?: Date | string | null
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.AuthRole
    createdAt?: Date | string
    username?: string | null
    password?: string | null
    hashedPassword?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    gameStatus?: UserGameStatusCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    userGames?: UserGameCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.AuthRole
    createdAt?: Date | string
    username?: string | null
    password?: string | null
    hashedPassword?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    gameStatus?: UserGameStatusUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    userGames?: UserGameUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAuthRoleFieldUpdateOperationsInput | $Enums.AuthRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    gameStatus?: UserGameStatusUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    userGames?: UserGameUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAuthRoleFieldUpdateOperationsInput | $Enums.AuthRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    gameStatus?: UserGameStatusUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    userGames?: UserGameUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.AuthRole
    createdAt?: Date | string
    username?: string | null
    password?: string | null
    hashedPassword?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAuthRoleFieldUpdateOperationsInput | $Enums.AuthRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAuthRoleFieldUpdateOperationsInput | $Enums.AuthRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameCreateInput = {
    name: string
    steamAppId?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userGames?: UserGameCreateNestedManyWithoutGameInput
    gameStatuses?: UserGameStatusCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: number
    name: string
    steamAppId?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userGames?: UserGameUncheckedCreateNestedManyWithoutGameInput
    gameStatuses?: UserGameStatusUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    steamAppId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGames?: UserGameUpdateManyWithoutGameNestedInput
    gameStatuses?: UserGameStatusUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    steamAppId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGames?: UserGameUncheckedUpdateManyWithoutGameNestedInput
    gameStatuses?: UserGameStatusUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: number
    name: string
    steamAppId?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    steamAppId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    steamAppId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGameCreateInput = {
    playtimeMinutes?: number
    lastPlayedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserGamesInput
    game: GameCreateNestedOneWithoutUserGamesInput
  }

  export type UserGameUncheckedCreateInput = {
    id?: number
    userId: string
    gameId: number
    playtimeMinutes?: number
    lastPlayedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGameUpdateInput = {
    playtimeMinutes?: IntFieldUpdateOperationsInput | number
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserGamesNestedInput
    game?: GameUpdateOneRequiredWithoutUserGamesNestedInput
  }

  export type UserGameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
    playtimeMinutes?: IntFieldUpdateOperationsInput | number
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGameCreateManyInput = {
    id?: number
    userId: string
    gameId: number
    playtimeMinutes?: number
    lastPlayedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGameUpdateManyMutationInput = {
    playtimeMinutes?: IntFieldUpdateOperationsInput | number
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
    playtimeMinutes?: IntFieldUpdateOperationsInput | number
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateLimitRequestCreateInput = {
    ip: string
    timestamp: Date | string
  }

  export type RateLimitRequestUncheckedCreateInput = {
    id?: number
    ip: string
    timestamp: Date | string
  }

  export type RateLimitRequestUpdateInput = {
    ip?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateLimitRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateLimitRequestCreateManyInput = {
    id?: number
    ip: string
    timestamp: Date | string
  }

  export type RateLimitRequestUpdateManyMutationInput = {
    ip?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateLimitRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateLimitViolationCreateInput = {
    ip: string
    violations: number
  }

  export type RateLimitViolationUncheckedCreateInput = {
    ip: string
    violations: number
  }

  export type RateLimitViolationUpdateInput = {
    ip?: StringFieldUpdateOperationsInput | string
    violations?: IntFieldUpdateOperationsInput | number
  }

  export type RateLimitViolationUncheckedUpdateInput = {
    ip?: StringFieldUpdateOperationsInput | string
    violations?: IntFieldUpdateOperationsInput | number
  }

  export type RateLimitViolationCreateManyInput = {
    ip: string
    violations: number
  }

  export type RateLimitViolationUpdateManyMutationInput = {
    ip?: StringFieldUpdateOperationsInput | string
    violations?: IntFieldUpdateOperationsInput | number
  }

  export type RateLimitViolationUncheckedUpdateManyInput = {
    ip?: StringFieldUpdateOperationsInput | string
    violations?: IntFieldUpdateOperationsInput | number
  }

  export type RateLimitBlockCreateInput = {
    ip: string
    block_until: Date | string
  }

  export type RateLimitBlockUncheckedCreateInput = {
    ip: string
    block_until: Date | string
  }

  export type RateLimitBlockUpdateInput = {
    ip?: StringFieldUpdateOperationsInput | string
    block_until?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateLimitBlockUncheckedUpdateInput = {
    ip?: StringFieldUpdateOperationsInput | string
    block_until?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateLimitBlockCreateManyInput = {
    ip: string
    block_until: Date | string
  }

  export type RateLimitBlockUpdateManyMutationInput = {
    ip?: StringFieldUpdateOperationsInput | string
    block_until?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateLimitBlockUncheckedUpdateManyInput = {
    ip?: StringFieldUpdateOperationsInput | string
    block_until?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGameStatusCreateInput = {
    status: string
    progress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGameStatusInput
    game: GameCreateNestedOneWithoutGameStatusesInput
  }

  export type UserGameStatusUncheckedCreateInput = {
    id?: number
    userId: string
    gameId: number
    status: string
    progress: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGameStatusUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    progress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGameStatusNestedInput
    game?: GameUpdateOneRequiredWithoutGameStatusesNestedInput
  }

  export type UserGameStatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    progress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGameStatusCreateManyInput = {
    id?: number
    userId: string
    gameId: number
    status: string
    progress: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGameStatusUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    progress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGameStatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    progress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    issuedAt?: SortOrder
    revokedAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    issuedAt?: SortOrder
    revokedAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    issuedAt?: SortOrder
    revokedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumAuthRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthRole | EnumAuthRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AuthRole[] | ListEnumAuthRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthRole[] | ListEnumAuthRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthRoleFilter<$PrismaModel> | $Enums.AuthRole
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type UserGameStatusListRelationFilter = {
    every?: UserGameStatusWhereInput
    some?: UserGameStatusWhereInput
    none?: UserGameStatusWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type UserGameListRelationFilter = {
    every?: UserGameWhereInput
    some?: UserGameWhereInput
    none?: UserGameWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserGameStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserGameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
    hashedPassword?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
    hashedPassword?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
    hashedPassword?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumAuthRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthRole | EnumAuthRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AuthRole[] | ListEnumAuthRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthRole[] | ListEnumAuthRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthRoleWithAggregatesFilter<$PrismaModel> | $Enums.AuthRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthRoleFilter<$PrismaModel>
    _max?: NestedEnumAuthRoleFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    steamAppId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    steamAppId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    steamAppId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type UserGameUserIdGameIdCompoundUniqueInput = {
    userId: string
    gameId: number
  }

  export type UserGameCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    playtimeMinutes?: SortOrder
    lastPlayedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserGameAvgOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    playtimeMinutes?: SortOrder
  }

  export type UserGameMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    playtimeMinutes?: SortOrder
    lastPlayedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserGameMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    playtimeMinutes?: SortOrder
    lastPlayedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserGameSumOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    playtimeMinutes?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type RateLimitRequestCountOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    timestamp?: SortOrder
  }

  export type RateLimitRequestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RateLimitRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    timestamp?: SortOrder
  }

  export type RateLimitRequestMinOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    timestamp?: SortOrder
  }

  export type RateLimitRequestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RateLimitViolationCountOrderByAggregateInput = {
    ip?: SortOrder
    violations?: SortOrder
  }

  export type RateLimitViolationAvgOrderByAggregateInput = {
    violations?: SortOrder
  }

  export type RateLimitViolationMaxOrderByAggregateInput = {
    ip?: SortOrder
    violations?: SortOrder
  }

  export type RateLimitViolationMinOrderByAggregateInput = {
    ip?: SortOrder
    violations?: SortOrder
  }

  export type RateLimitViolationSumOrderByAggregateInput = {
    violations?: SortOrder
  }

  export type RateLimitBlockCountOrderByAggregateInput = {
    ip?: SortOrder
    block_until?: SortOrder
  }

  export type RateLimitBlockMaxOrderByAggregateInput = {
    ip?: SortOrder
    block_until?: SortOrder
  }

  export type RateLimitBlockMinOrderByAggregateInput = {
    ip?: SortOrder
    block_until?: SortOrder
  }

  export type UserGameStatusUserIdGameIdCompoundUniqueInput = {
    userId: string
    gameId: number
  }

  export type UserGameStatusCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserGameStatusAvgOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
  }

  export type UserGameStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserGameStatusMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserGameStatusSumOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type UserGameStatusCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGameStatusCreateWithoutUserInput, UserGameStatusUncheckedCreateWithoutUserInput> | UserGameStatusCreateWithoutUserInput[] | UserGameStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGameStatusCreateOrConnectWithoutUserInput | UserGameStatusCreateOrConnectWithoutUserInput[]
    createMany?: UserGameStatusCreateManyUserInputEnvelope
    connect?: UserGameStatusWhereUniqueInput | UserGameStatusWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type UserGameCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGameCreateWithoutUserInput, UserGameUncheckedCreateWithoutUserInput> | UserGameCreateWithoutUserInput[] | UserGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutUserInput | UserGameCreateOrConnectWithoutUserInput[]
    createMany?: UserGameCreateManyUserInputEnvelope
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type UserGameStatusUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGameStatusCreateWithoutUserInput, UserGameStatusUncheckedCreateWithoutUserInput> | UserGameStatusCreateWithoutUserInput[] | UserGameStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGameStatusCreateOrConnectWithoutUserInput | UserGameStatusCreateOrConnectWithoutUserInput[]
    createMany?: UserGameStatusCreateManyUserInputEnvelope
    connect?: UserGameStatusWhereUniqueInput | UserGameStatusWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type UserGameUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGameCreateWithoutUserInput, UserGameUncheckedCreateWithoutUserInput> | UserGameCreateWithoutUserInput[] | UserGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutUserInput | UserGameCreateOrConnectWithoutUserInput[]
    createMany?: UserGameCreateManyUserInputEnvelope
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumAuthRoleFieldUpdateOperationsInput = {
    set?: $Enums.AuthRole
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserGameStatusUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGameStatusCreateWithoutUserInput, UserGameStatusUncheckedCreateWithoutUserInput> | UserGameStatusCreateWithoutUserInput[] | UserGameStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGameStatusCreateOrConnectWithoutUserInput | UserGameStatusCreateOrConnectWithoutUserInput[]
    upsert?: UserGameStatusUpsertWithWhereUniqueWithoutUserInput | UserGameStatusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGameStatusCreateManyUserInputEnvelope
    set?: UserGameStatusWhereUniqueInput | UserGameStatusWhereUniqueInput[]
    disconnect?: UserGameStatusWhereUniqueInput | UserGameStatusWhereUniqueInput[]
    delete?: UserGameStatusWhereUniqueInput | UserGameStatusWhereUniqueInput[]
    connect?: UserGameStatusWhereUniqueInput | UserGameStatusWhereUniqueInput[]
    update?: UserGameStatusUpdateWithWhereUniqueWithoutUserInput | UserGameStatusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGameStatusUpdateManyWithWhereWithoutUserInput | UserGameStatusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGameStatusScalarWhereInput | UserGameStatusScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UserGameUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGameCreateWithoutUserInput, UserGameUncheckedCreateWithoutUserInput> | UserGameCreateWithoutUserInput[] | UserGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutUserInput | UserGameCreateOrConnectWithoutUserInput[]
    upsert?: UserGameUpsertWithWhereUniqueWithoutUserInput | UserGameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGameCreateManyUserInputEnvelope
    set?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    disconnect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    delete?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    update?: UserGameUpdateWithWhereUniqueWithoutUserInput | UserGameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGameUpdateManyWithWhereWithoutUserInput | UserGameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserGameStatusUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGameStatusCreateWithoutUserInput, UserGameStatusUncheckedCreateWithoutUserInput> | UserGameStatusCreateWithoutUserInput[] | UserGameStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGameStatusCreateOrConnectWithoutUserInput | UserGameStatusCreateOrConnectWithoutUserInput[]
    upsert?: UserGameStatusUpsertWithWhereUniqueWithoutUserInput | UserGameStatusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGameStatusCreateManyUserInputEnvelope
    set?: UserGameStatusWhereUniqueInput | UserGameStatusWhereUniqueInput[]
    disconnect?: UserGameStatusWhereUniqueInput | UserGameStatusWhereUniqueInput[]
    delete?: UserGameStatusWhereUniqueInput | UserGameStatusWhereUniqueInput[]
    connect?: UserGameStatusWhereUniqueInput | UserGameStatusWhereUniqueInput[]
    update?: UserGameStatusUpdateWithWhereUniqueWithoutUserInput | UserGameStatusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGameStatusUpdateManyWithWhereWithoutUserInput | UserGameStatusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGameStatusScalarWhereInput | UserGameStatusScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UserGameUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGameCreateWithoutUserInput, UserGameUncheckedCreateWithoutUserInput> | UserGameCreateWithoutUserInput[] | UserGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutUserInput | UserGameCreateOrConnectWithoutUserInput[]
    upsert?: UserGameUpsertWithWhereUniqueWithoutUserInput | UserGameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGameCreateManyUserInputEnvelope
    set?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    disconnect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    delete?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    update?: UserGameUpdateWithWhereUniqueWithoutUserInput | UserGameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGameUpdateManyWithWhereWithoutUserInput | UserGameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserGameCreateNestedManyWithoutGameInput = {
    create?: XOR<UserGameCreateWithoutGameInput, UserGameUncheckedCreateWithoutGameInput> | UserGameCreateWithoutGameInput[] | UserGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutGameInput | UserGameCreateOrConnectWithoutGameInput[]
    createMany?: UserGameCreateManyGameInputEnvelope
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
  }

  export type UserGameStatusCreateNestedManyWithoutGameInput = {
    create?: XOR<UserGameStatusCreateWithoutGameInput, UserGameStatusUncheckedCreateWithoutGameInput> | UserGameStatusCreateWithoutGameInput[] | UserGameStatusUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UserGameStatusCreateOrConnectWithoutGameInput | UserGameStatusCreateOrConnectWithoutGameInput[]
    createMany?: UserGameStatusCreateManyGameInputEnvelope
    connect?: UserGameStatusWhereUniqueInput | UserGameStatusWhereUniqueInput[]
  }

  export type UserGameUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<UserGameCreateWithoutGameInput, UserGameUncheckedCreateWithoutGameInput> | UserGameCreateWithoutGameInput[] | UserGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutGameInput | UserGameCreateOrConnectWithoutGameInput[]
    createMany?: UserGameCreateManyGameInputEnvelope
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
  }

  export type UserGameStatusUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<UserGameStatusCreateWithoutGameInput, UserGameStatusUncheckedCreateWithoutGameInput> | UserGameStatusCreateWithoutGameInput[] | UserGameStatusUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UserGameStatusCreateOrConnectWithoutGameInput | UserGameStatusCreateOrConnectWithoutGameInput[]
    createMany?: UserGameStatusCreateManyGameInputEnvelope
    connect?: UserGameStatusWhereUniqueInput | UserGameStatusWhereUniqueInput[]
  }

  export type UserGameUpdateManyWithoutGameNestedInput = {
    create?: XOR<UserGameCreateWithoutGameInput, UserGameUncheckedCreateWithoutGameInput> | UserGameCreateWithoutGameInput[] | UserGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutGameInput | UserGameCreateOrConnectWithoutGameInput[]
    upsert?: UserGameUpsertWithWhereUniqueWithoutGameInput | UserGameUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: UserGameCreateManyGameInputEnvelope
    set?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    disconnect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    delete?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    update?: UserGameUpdateWithWhereUniqueWithoutGameInput | UserGameUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: UserGameUpdateManyWithWhereWithoutGameInput | UserGameUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
  }

  export type UserGameStatusUpdateManyWithoutGameNestedInput = {
    create?: XOR<UserGameStatusCreateWithoutGameInput, UserGameStatusUncheckedCreateWithoutGameInput> | UserGameStatusCreateWithoutGameInput[] | UserGameStatusUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UserGameStatusCreateOrConnectWithoutGameInput | UserGameStatusCreateOrConnectWithoutGameInput[]
    upsert?: UserGameStatusUpsertWithWhereUniqueWithoutGameInput | UserGameStatusUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: UserGameStatusCreateManyGameInputEnvelope
    set?: UserGameStatusWhereUniqueInput | UserGameStatusWhereUniqueInput[]
    disconnect?: UserGameStatusWhereUniqueInput | UserGameStatusWhereUniqueInput[]
    delete?: UserGameStatusWhereUniqueInput | UserGameStatusWhereUniqueInput[]
    connect?: UserGameStatusWhereUniqueInput | UserGameStatusWhereUniqueInput[]
    update?: UserGameStatusUpdateWithWhereUniqueWithoutGameInput | UserGameStatusUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: UserGameStatusUpdateManyWithWhereWithoutGameInput | UserGameStatusUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: UserGameStatusScalarWhereInput | UserGameStatusScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserGameUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<UserGameCreateWithoutGameInput, UserGameUncheckedCreateWithoutGameInput> | UserGameCreateWithoutGameInput[] | UserGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutGameInput | UserGameCreateOrConnectWithoutGameInput[]
    upsert?: UserGameUpsertWithWhereUniqueWithoutGameInput | UserGameUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: UserGameCreateManyGameInputEnvelope
    set?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    disconnect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    delete?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    update?: UserGameUpdateWithWhereUniqueWithoutGameInput | UserGameUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: UserGameUpdateManyWithWhereWithoutGameInput | UserGameUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
  }

  export type UserGameStatusUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<UserGameStatusCreateWithoutGameInput, UserGameStatusUncheckedCreateWithoutGameInput> | UserGameStatusCreateWithoutGameInput[] | UserGameStatusUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UserGameStatusCreateOrConnectWithoutGameInput | UserGameStatusCreateOrConnectWithoutGameInput[]
    upsert?: UserGameStatusUpsertWithWhereUniqueWithoutGameInput | UserGameStatusUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: UserGameStatusCreateManyGameInputEnvelope
    set?: UserGameStatusWhereUniqueInput | UserGameStatusWhereUniqueInput[]
    disconnect?: UserGameStatusWhereUniqueInput | UserGameStatusWhereUniqueInput[]
    delete?: UserGameStatusWhereUniqueInput | UserGameStatusWhereUniqueInput[]
    connect?: UserGameStatusWhereUniqueInput | UserGameStatusWhereUniqueInput[]
    update?: UserGameStatusUpdateWithWhereUniqueWithoutGameInput | UserGameStatusUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: UserGameStatusUpdateManyWithWhereWithoutGameInput | UserGameStatusUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: UserGameStatusScalarWhereInput | UserGameStatusScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserGamesInput = {
    create?: XOR<UserCreateWithoutUserGamesInput, UserUncheckedCreateWithoutUserGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserGamesInput
    connect?: UserWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutUserGamesInput = {
    create?: XOR<GameCreateWithoutUserGamesInput, GameUncheckedCreateWithoutUserGamesInput>
    connectOrCreate?: GameCreateOrConnectWithoutUserGamesInput
    connect?: GameWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserGamesNestedInput = {
    create?: XOR<UserCreateWithoutUserGamesInput, UserUncheckedCreateWithoutUserGamesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserGamesInput
    upsert?: UserUpsertWithoutUserGamesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserGamesInput, UserUpdateWithoutUserGamesInput>, UserUncheckedUpdateWithoutUserGamesInput>
  }

  export type GameUpdateOneRequiredWithoutUserGamesNestedInput = {
    create?: XOR<GameCreateWithoutUserGamesInput, GameUncheckedCreateWithoutUserGamesInput>
    connectOrCreate?: GameCreateOrConnectWithoutUserGamesInput
    upsert?: GameUpsertWithoutUserGamesInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutUserGamesInput, GameUpdateWithoutUserGamesInput>, GameUncheckedUpdateWithoutUserGamesInput>
  }

  export type UserCreateNestedOneWithoutGameStatusInput = {
    create?: XOR<UserCreateWithoutGameStatusInput, UserUncheckedCreateWithoutGameStatusInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameStatusInput
    connect?: UserWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutGameStatusesInput = {
    create?: XOR<GameCreateWithoutGameStatusesInput, GameUncheckedCreateWithoutGameStatusesInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameStatusesInput
    connect?: GameWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGameStatusNestedInput = {
    create?: XOR<UserCreateWithoutGameStatusInput, UserUncheckedCreateWithoutGameStatusInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameStatusInput
    upsert?: UserUpsertWithoutGameStatusInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGameStatusInput, UserUpdateWithoutGameStatusInput>, UserUncheckedUpdateWithoutGameStatusInput>
  }

  export type GameUpdateOneRequiredWithoutGameStatusesNestedInput = {
    create?: XOR<GameCreateWithoutGameStatusesInput, GameUncheckedCreateWithoutGameStatusesInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameStatusesInput
    upsert?: GameUpsertWithoutGameStatusesInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutGameStatusesInput, GameUpdateWithoutGameStatusesInput>, GameUncheckedUpdateWithoutGameStatusesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumAuthRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthRole | EnumAuthRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AuthRole[] | ListEnumAuthRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthRole[] | ListEnumAuthRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthRoleFilter<$PrismaModel> | $Enums.AuthRole
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumAuthRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthRole | EnumAuthRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AuthRole[] | ListEnumAuthRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthRole[] | ListEnumAuthRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthRoleWithAggregatesFilter<$PrismaModel> | $Enums.AuthRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthRoleFilter<$PrismaModel>
    _max?: NestedEnumAuthRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.AuthRole
    createdAt?: Date | string
    username?: string | null
    password?: string | null
    hashedPassword?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    gameStatus?: UserGameStatusCreateNestedManyWithoutUserInput
    userGames?: UserGameCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.AuthRole
    createdAt?: Date | string
    username?: string | null
    password?: string | null
    hashedPassword?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    gameStatus?: UserGameStatusUncheckedCreateNestedManyWithoutUserInput
    userGames?: UserGameUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAuthRoleFieldUpdateOperationsInput | $Enums.AuthRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    gameStatus?: UserGameStatusUpdateManyWithoutUserNestedInput
    userGames?: UserGameUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAuthRoleFieldUpdateOperationsInput | $Enums.AuthRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    gameStatus?: UserGameStatusUncheckedUpdateManyWithoutUserNestedInput
    userGames?: UserGameUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserGameStatusCreateWithoutUserInput = {
    status: string
    progress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    game: GameCreateNestedOneWithoutGameStatusesInput
  }

  export type UserGameStatusUncheckedCreateWithoutUserInput = {
    id?: number
    gameId: number
    status: string
    progress: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGameStatusCreateOrConnectWithoutUserInput = {
    where: UserGameStatusWhereUniqueInput
    create: XOR<UserGameStatusCreateWithoutUserInput, UserGameStatusUncheckedCreateWithoutUserInput>
  }

  export type UserGameStatusCreateManyUserInputEnvelope = {
    data: UserGameStatusCreateManyUserInput | UserGameStatusCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    issuedAt?: Date | string
    revokedAt?: Date | string | null
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    issuedAt?: Date | string
    revokedAt?: Date | string | null
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserGameCreateWithoutUserInput = {
    playtimeMinutes?: number
    lastPlayedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game: GameCreateNestedOneWithoutUserGamesInput
  }

  export type UserGameUncheckedCreateWithoutUserInput = {
    id?: number
    gameId: number
    playtimeMinutes?: number
    lastPlayedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGameCreateOrConnectWithoutUserInput = {
    where: UserGameWhereUniqueInput
    create: XOR<UserGameCreateWithoutUserInput, UserGameUncheckedCreateWithoutUserInput>
  }

  export type UserGameCreateManyUserInputEnvelope = {
    data: UserGameCreateManyUserInput | UserGameCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: UuidFilter<"Account"> | string
    userId?: UuidFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type UserGameStatusUpsertWithWhereUniqueWithoutUserInput = {
    where: UserGameStatusWhereUniqueInput
    update: XOR<UserGameStatusUpdateWithoutUserInput, UserGameStatusUncheckedUpdateWithoutUserInput>
    create: XOR<UserGameStatusCreateWithoutUserInput, UserGameStatusUncheckedCreateWithoutUserInput>
  }

  export type UserGameStatusUpdateWithWhereUniqueWithoutUserInput = {
    where: UserGameStatusWhereUniqueInput
    data: XOR<UserGameStatusUpdateWithoutUserInput, UserGameStatusUncheckedUpdateWithoutUserInput>
  }

  export type UserGameStatusUpdateManyWithWhereWithoutUserInput = {
    where: UserGameStatusScalarWhereInput
    data: XOR<UserGameStatusUpdateManyMutationInput, UserGameStatusUncheckedUpdateManyWithoutUserInput>
  }

  export type UserGameStatusScalarWhereInput = {
    AND?: UserGameStatusScalarWhereInput | UserGameStatusScalarWhereInput[]
    OR?: UserGameStatusScalarWhereInput[]
    NOT?: UserGameStatusScalarWhereInput | UserGameStatusScalarWhereInput[]
    id?: IntFilter<"UserGameStatus"> | number
    userId?: UuidFilter<"UserGameStatus"> | string
    gameId?: IntFilter<"UserGameStatus"> | number
    status?: StringFilter<"UserGameStatus"> | string
    progress?: StringFilter<"UserGameStatus"> | string
    createdAt?: DateTimeFilter<"UserGameStatus"> | Date | string
    updatedAt?: DateTimeFilter<"UserGameStatus"> | Date | string
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: UuidFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: UuidFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    issuedAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
  }

  export type UserGameUpsertWithWhereUniqueWithoutUserInput = {
    where: UserGameWhereUniqueInput
    update: XOR<UserGameUpdateWithoutUserInput, UserGameUncheckedUpdateWithoutUserInput>
    create: XOR<UserGameCreateWithoutUserInput, UserGameUncheckedCreateWithoutUserInput>
  }

  export type UserGameUpdateWithWhereUniqueWithoutUserInput = {
    where: UserGameWhereUniqueInput
    data: XOR<UserGameUpdateWithoutUserInput, UserGameUncheckedUpdateWithoutUserInput>
  }

  export type UserGameUpdateManyWithWhereWithoutUserInput = {
    where: UserGameScalarWhereInput
    data: XOR<UserGameUpdateManyMutationInput, UserGameUncheckedUpdateManyWithoutUserInput>
  }

  export type UserGameScalarWhereInput = {
    AND?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
    OR?: UserGameScalarWhereInput[]
    NOT?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
    id?: IntFilter<"UserGame"> | number
    userId?: UuidFilter<"UserGame"> | string
    gameId?: IntFilter<"UserGame"> | number
    playtimeMinutes?: IntFilter<"UserGame"> | number
    lastPlayedAt?: DateTimeNullableFilter<"UserGame"> | Date | string | null
    createdAt?: DateTimeFilter<"UserGame"> | Date | string
    updatedAt?: DateTimeFilter<"UserGame"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.AuthRole
    createdAt?: Date | string
    username?: string | null
    password?: string | null
    hashedPassword?: string | null
    gameStatus?: UserGameStatusCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    userGames?: UserGameCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.AuthRole
    createdAt?: Date | string
    username?: string | null
    password?: string | null
    hashedPassword?: string | null
    gameStatus?: UserGameStatusUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    userGames?: UserGameUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAuthRoleFieldUpdateOperationsInput | $Enums.AuthRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    gameStatus?: UserGameStatusUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    userGames?: UserGameUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAuthRoleFieldUpdateOperationsInput | $Enums.AuthRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    gameStatus?: UserGameStatusUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    userGames?: UserGameUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserGameCreateWithoutGameInput = {
    playtimeMinutes?: number
    lastPlayedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserGamesInput
  }

  export type UserGameUncheckedCreateWithoutGameInput = {
    id?: number
    userId: string
    playtimeMinutes?: number
    lastPlayedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGameCreateOrConnectWithoutGameInput = {
    where: UserGameWhereUniqueInput
    create: XOR<UserGameCreateWithoutGameInput, UserGameUncheckedCreateWithoutGameInput>
  }

  export type UserGameCreateManyGameInputEnvelope = {
    data: UserGameCreateManyGameInput | UserGameCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type UserGameStatusCreateWithoutGameInput = {
    status: string
    progress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGameStatusInput
  }

  export type UserGameStatusUncheckedCreateWithoutGameInput = {
    id?: number
    userId: string
    status: string
    progress: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGameStatusCreateOrConnectWithoutGameInput = {
    where: UserGameStatusWhereUniqueInput
    create: XOR<UserGameStatusCreateWithoutGameInput, UserGameStatusUncheckedCreateWithoutGameInput>
  }

  export type UserGameStatusCreateManyGameInputEnvelope = {
    data: UserGameStatusCreateManyGameInput | UserGameStatusCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type UserGameUpsertWithWhereUniqueWithoutGameInput = {
    where: UserGameWhereUniqueInput
    update: XOR<UserGameUpdateWithoutGameInput, UserGameUncheckedUpdateWithoutGameInput>
    create: XOR<UserGameCreateWithoutGameInput, UserGameUncheckedCreateWithoutGameInput>
  }

  export type UserGameUpdateWithWhereUniqueWithoutGameInput = {
    where: UserGameWhereUniqueInput
    data: XOR<UserGameUpdateWithoutGameInput, UserGameUncheckedUpdateWithoutGameInput>
  }

  export type UserGameUpdateManyWithWhereWithoutGameInput = {
    where: UserGameScalarWhereInput
    data: XOR<UserGameUpdateManyMutationInput, UserGameUncheckedUpdateManyWithoutGameInput>
  }

  export type UserGameStatusUpsertWithWhereUniqueWithoutGameInput = {
    where: UserGameStatusWhereUniqueInput
    update: XOR<UserGameStatusUpdateWithoutGameInput, UserGameStatusUncheckedUpdateWithoutGameInput>
    create: XOR<UserGameStatusCreateWithoutGameInput, UserGameStatusUncheckedCreateWithoutGameInput>
  }

  export type UserGameStatusUpdateWithWhereUniqueWithoutGameInput = {
    where: UserGameStatusWhereUniqueInput
    data: XOR<UserGameStatusUpdateWithoutGameInput, UserGameStatusUncheckedUpdateWithoutGameInput>
  }

  export type UserGameStatusUpdateManyWithWhereWithoutGameInput = {
    where: UserGameStatusScalarWhereInput
    data: XOR<UserGameStatusUpdateManyMutationInput, UserGameStatusUncheckedUpdateManyWithoutGameInput>
  }

  export type UserCreateWithoutUserGamesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.AuthRole
    createdAt?: Date | string
    username?: string | null
    password?: string | null
    hashedPassword?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    gameStatus?: UserGameStatusCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserGamesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.AuthRole
    createdAt?: Date | string
    username?: string | null
    password?: string | null
    hashedPassword?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    gameStatus?: UserGameStatusUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserGamesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserGamesInput, UserUncheckedCreateWithoutUserGamesInput>
  }

  export type GameCreateWithoutUserGamesInput = {
    name: string
    steamAppId?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gameStatuses?: UserGameStatusCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutUserGamesInput = {
    id?: number
    name: string
    steamAppId?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gameStatuses?: UserGameStatusUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutUserGamesInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutUserGamesInput, GameUncheckedCreateWithoutUserGamesInput>
  }

  export type UserUpsertWithoutUserGamesInput = {
    update: XOR<UserUpdateWithoutUserGamesInput, UserUncheckedUpdateWithoutUserGamesInput>
    create: XOR<UserCreateWithoutUserGamesInput, UserUncheckedCreateWithoutUserGamesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserGamesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserGamesInput, UserUncheckedUpdateWithoutUserGamesInput>
  }

  export type UserUpdateWithoutUserGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAuthRoleFieldUpdateOperationsInput | $Enums.AuthRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    gameStatus?: UserGameStatusUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAuthRoleFieldUpdateOperationsInput | $Enums.AuthRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    gameStatus?: UserGameStatusUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GameUpsertWithoutUserGamesInput = {
    update: XOR<GameUpdateWithoutUserGamesInput, GameUncheckedUpdateWithoutUserGamesInput>
    create: XOR<GameCreateWithoutUserGamesInput, GameUncheckedCreateWithoutUserGamesInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutUserGamesInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutUserGamesInput, GameUncheckedUpdateWithoutUserGamesInput>
  }

  export type GameUpdateWithoutUserGamesInput = {
    name?: StringFieldUpdateOperationsInput | string
    steamAppId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameStatuses?: UserGameStatusUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutUserGamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    steamAppId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameStatuses?: UserGameStatusUncheckedUpdateManyWithoutGameNestedInput
  }

  export type UserCreateWithoutGameStatusInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.AuthRole
    createdAt?: Date | string
    username?: string | null
    password?: string | null
    hashedPassword?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    userGames?: UserGameCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGameStatusInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.AuthRole
    createdAt?: Date | string
    username?: string | null
    password?: string | null
    hashedPassword?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    userGames?: UserGameUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGameStatusInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGameStatusInput, UserUncheckedCreateWithoutGameStatusInput>
  }

  export type GameCreateWithoutGameStatusesInput = {
    name: string
    steamAppId?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userGames?: UserGameCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutGameStatusesInput = {
    id?: number
    name: string
    steamAppId?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userGames?: UserGameUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutGameStatusesInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutGameStatusesInput, GameUncheckedCreateWithoutGameStatusesInput>
  }

  export type UserUpsertWithoutGameStatusInput = {
    update: XOR<UserUpdateWithoutGameStatusInput, UserUncheckedUpdateWithoutGameStatusInput>
    create: XOR<UserCreateWithoutGameStatusInput, UserUncheckedCreateWithoutGameStatusInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGameStatusInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGameStatusInput, UserUncheckedUpdateWithoutGameStatusInput>
  }

  export type UserUpdateWithoutGameStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAuthRoleFieldUpdateOperationsInput | $Enums.AuthRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    userGames?: UserGameUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGameStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAuthRoleFieldUpdateOperationsInput | $Enums.AuthRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    userGames?: UserGameUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GameUpsertWithoutGameStatusesInput = {
    update: XOR<GameUpdateWithoutGameStatusesInput, GameUncheckedUpdateWithoutGameStatusesInput>
    create: XOR<GameCreateWithoutGameStatusesInput, GameUncheckedCreateWithoutGameStatusesInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutGameStatusesInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutGameStatusesInput, GameUncheckedUpdateWithoutGameStatusesInput>
  }

  export type GameUpdateWithoutGameStatusesInput = {
    name?: StringFieldUpdateOperationsInput | string
    steamAppId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGames?: UserGameUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutGameStatusesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    steamAppId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGames?: UserGameUncheckedUpdateManyWithoutGameNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type UserGameStatusCreateManyUserInput = {
    id?: number
    gameId: number
    status: string
    progress: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    issuedAt?: Date | string
    revokedAt?: Date | string | null
  }

  export type UserGameCreateManyUserInput = {
    id?: number
    gameId: number
    playtimeMinutes?: number
    lastPlayedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserGameStatusUpdateWithoutUserInput = {
    status?: StringFieldUpdateOperationsInput | string
    progress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutGameStatusesNestedInput
  }

  export type UserGameStatusUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    progress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGameStatusUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    progress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserGameUpdateWithoutUserInput = {
    playtimeMinutes?: IntFieldUpdateOperationsInput | number
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutUserGamesNestedInput
  }

  export type UserGameUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    playtimeMinutes?: IntFieldUpdateOperationsInput | number
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGameUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    playtimeMinutes?: IntFieldUpdateOperationsInput | number
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGameCreateManyGameInput = {
    id?: number
    userId: string
    playtimeMinutes?: number
    lastPlayedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGameStatusCreateManyGameInput = {
    id?: number
    userId: string
    status: string
    progress: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGameUpdateWithoutGameInput = {
    playtimeMinutes?: IntFieldUpdateOperationsInput | number
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserGamesNestedInput
  }

  export type UserGameUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    playtimeMinutes?: IntFieldUpdateOperationsInput | number
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGameUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    playtimeMinutes?: IntFieldUpdateOperationsInput | number
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGameStatusUpdateWithoutGameInput = {
    status?: StringFieldUpdateOperationsInput | string
    progress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGameStatusNestedInput
  }

  export type UserGameStatusUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGameStatusUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    progress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}