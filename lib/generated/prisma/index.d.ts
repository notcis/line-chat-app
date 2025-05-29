
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model requests
 * 
 */
export type requests = $Result.DefaultSelection<Prisma.$requestsPayload>
/**
 * Model friends
 * 
 */
export type friends = $Result.DefaultSelection<Prisma.$friendsPayload>
/**
 * Model conversations
 * 
 */
export type conversations = $Result.DefaultSelection<Prisma.$conversationsPayload>
/**
 * Model conversationMembers
 * 
 */
export type conversationMembers = $Result.DefaultSelection<Prisma.$conversationMembersPayload>
/**
 * Model messages
 * 
 */
export type messages = $Result.DefaultSelection<Prisma.$messagesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requests`: Exposes CRUD operations for the **requests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requests
    * const requests = await prisma.requests.findMany()
    * ```
    */
  get requests(): Prisma.requestsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friends`: Exposes CRUD operations for the **friends** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friends
    * const friends = await prisma.friends.findMany()
    * ```
    */
  get friends(): Prisma.friendsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversations`: Exposes CRUD operations for the **conversations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversations.findMany()
    * ```
    */
  get conversations(): Prisma.conversationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversationMembers`: Exposes CRUD operations for the **conversationMembers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConversationMembers
    * const conversationMembers = await prisma.conversationMembers.findMany()
    * ```
    */
  get conversationMembers(): Prisma.conversationMembersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.messagesDelegate<ExtArgs, ClientOptions>;
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
    users: 'users',
    requests: 'requests',
    friends: 'friends',
    conversations: 'conversations',
    conversationMembers: 'conversationMembers',
    messages: 'messages'
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
      modelProps: "users" | "requests" | "friends" | "conversations" | "conversationMembers" | "messages"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      requests: {
        payload: Prisma.$requestsPayload<ExtArgs>
        fields: Prisma.requestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.requestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.requestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestsPayload>
          }
          findFirst: {
            args: Prisma.requestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.requestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestsPayload>
          }
          findMany: {
            args: Prisma.requestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestsPayload>[]
          }
          create: {
            args: Prisma.requestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestsPayload>
          }
          createMany: {
            args: Prisma.requestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.requestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestsPayload>
          }
          update: {
            args: Prisma.requestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestsPayload>
          }
          deleteMany: {
            args: Prisma.requestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.requestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.requestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestsPayload>
          }
          aggregate: {
            args: Prisma.RequestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequests>
          }
          groupBy: {
            args: Prisma.requestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.requestsCountArgs<ExtArgs>
            result: $Utils.Optional<RequestsCountAggregateOutputType> | number
          }
        }
      }
      friends: {
        payload: Prisma.$friendsPayload<ExtArgs>
        fields: Prisma.friendsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.friendsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.friendsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          findFirst: {
            args: Prisma.friendsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.friendsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          findMany: {
            args: Prisma.friendsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>[]
          }
          create: {
            args: Prisma.friendsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          createMany: {
            args: Prisma.friendsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.friendsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          update: {
            args: Prisma.friendsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          deleteMany: {
            args: Prisma.friendsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.friendsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.friendsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          aggregate: {
            args: Prisma.FriendsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriends>
          }
          groupBy: {
            args: Prisma.friendsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendsGroupByOutputType>[]
          }
          count: {
            args: Prisma.friendsCountArgs<ExtArgs>
            result: $Utils.Optional<FriendsCountAggregateOutputType> | number
          }
        }
      }
      conversations: {
        payload: Prisma.$conversationsPayload<ExtArgs>
        fields: Prisma.conversationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.conversationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.conversationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          findFirst: {
            args: Prisma.conversationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.conversationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          findMany: {
            args: Prisma.conversationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>[]
          }
          create: {
            args: Prisma.conversationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          createMany: {
            args: Prisma.conversationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.conversationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          update: {
            args: Prisma.conversationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          deleteMany: {
            args: Prisma.conversationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.conversationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.conversationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationsPayload>
          }
          aggregate: {
            args: Prisma.ConversationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversations>
          }
          groupBy: {
            args: Prisma.conversationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.conversationsCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationsCountAggregateOutputType> | number
          }
        }
      }
      conversationMembers: {
        payload: Prisma.$conversationMembersPayload<ExtArgs>
        fields: Prisma.conversationMembersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.conversationMembersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationMembersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.conversationMembersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationMembersPayload>
          }
          findFirst: {
            args: Prisma.conversationMembersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationMembersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.conversationMembersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationMembersPayload>
          }
          findMany: {
            args: Prisma.conversationMembersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationMembersPayload>[]
          }
          create: {
            args: Prisma.conversationMembersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationMembersPayload>
          }
          createMany: {
            args: Prisma.conversationMembersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.conversationMembersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationMembersPayload>
          }
          update: {
            args: Prisma.conversationMembersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationMembersPayload>
          }
          deleteMany: {
            args: Prisma.conversationMembersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.conversationMembersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.conversationMembersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversationMembersPayload>
          }
          aggregate: {
            args: Prisma.ConversationMembersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversationMembers>
          }
          groupBy: {
            args: Prisma.conversationMembersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationMembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.conversationMembersCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationMembersCountAggregateOutputType> | number
          }
        }
      }
      messages: {
        payload: Prisma.$messagesPayload<ExtArgs>
        fields: Prisma.messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findFirst: {
            args: Prisma.messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findMany: {
            args: Prisma.messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          create: {
            args: Prisma.messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          createMany: {
            args: Prisma.messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          update: {
            args: Prisma.messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          deleteMany: {
            args: Prisma.messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.messagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
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
    users?: usersOmit
    requests?: requestsOmit
    friends?: friendsOmit
    conversations?: conversationsOmit
    conversationMembers?: conversationMembersOmit
    messages?: messagesOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    sent: number
    received: number
    friends1: number
    friends2: number
    conversationMembers: number
    messages: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sent?: boolean | UsersCountOutputTypeCountSentArgs
    received?: boolean | UsersCountOutputTypeCountReceivedArgs
    friends1?: boolean | UsersCountOutputTypeCountFriends1Args
    friends2?: boolean | UsersCountOutputTypeCountFriends2Args
    conversationMembers?: boolean | UsersCountOutputTypeCountConversationMembersArgs
    messages?: boolean | UsersCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: requestsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: requestsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFriends1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friendsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFriends2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friendsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountConversationMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversationMembersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }


  /**
   * Count Type ConversationsCountOutputType
   */

  export type ConversationsCountOutputType = {
    friends: number
    conversationMembers: number
    messages: number
  }

  export type ConversationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friends?: boolean | ConversationsCountOutputTypeCountFriendsArgs
    conversationMembers?: boolean | ConversationsCountOutputTypeCountConversationMembersArgs
    messages?: boolean | ConversationsCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationsCountOutputType
     */
    select?: ConversationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeCountFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friendsWhereInput
  }

  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeCountConversationMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversationMembersWhereInput
  }

  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }


  /**
   * Count Type MessagesCountOutputType
   */

  export type MessagesCountOutputType = {
    conversationMembers: number
    conversations: number
  }

  export type MessagesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversationMembers?: boolean | MessagesCountOutputTypeCountConversationMembersArgs
    conversations?: boolean | MessagesCountOutputTypeCountConversationsArgs
  }

  // Custom InputTypes
  /**
   * MessagesCountOutputType without action
   */
  export type MessagesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessagesCountOutputType
     */
    select?: MessagesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessagesCountOutputType without action
   */
  export type MessagesCountOutputTypeCountConversationMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversationMembersWhereInput
  }

  /**
   * MessagesCountOutputType without action
   */
  export type MessagesCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    username: string | null
    password: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    username: string | null
    password: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    imageUrl: number
    username: number
    password: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    imageUrl?: true
    username?: true
    password?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    username?: true
    password?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    imageUrl?: true
    username?: true
    password?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    imageUrl: string | null
    username: string
    password: string
    email: string
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sent?: boolean | users$sentArgs<ExtArgs>
    received?: boolean | users$receivedArgs<ExtArgs>
    friends1?: boolean | users$friends1Args<ExtArgs>
    friends2?: boolean | users$friends2Args<ExtArgs>
    conversationMembers?: boolean | users$conversationMembersArgs<ExtArgs>
    messages?: boolean | users$messagesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "username" | "password" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sent?: boolean | users$sentArgs<ExtArgs>
    received?: boolean | users$receivedArgs<ExtArgs>
    friends1?: boolean | users$friends1Args<ExtArgs>
    friends2?: boolean | users$friends2Args<ExtArgs>
    conversationMembers?: boolean | users$conversationMembersArgs<ExtArgs>
    messages?: boolean | users$messagesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      sent: Prisma.$requestsPayload<ExtArgs>[]
      received: Prisma.$requestsPayload<ExtArgs>[]
      friends1: Prisma.$friendsPayload<ExtArgs>[]
      friends2: Prisma.$friendsPayload<ExtArgs>[]
      conversationMembers: Prisma.$conversationMembersPayload<ExtArgs>[]
      messages: Prisma.$messagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string | null
      username: string
      password: string
      email: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sent<T extends users$sentArgs<ExtArgs> = {}>(args?: Subset<T, users$sentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    received<T extends users$receivedArgs<ExtArgs> = {}>(args?: Subset<T, users$receivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friends1<T extends users$friends1Args<ExtArgs> = {}>(args?: Subset<T, users$friends1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friends2<T extends users$friends2Args<ExtArgs> = {}>(args?: Subset<T, users$friends2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversationMembers<T extends users$conversationMembersArgs<ExtArgs> = {}>(args?: Subset<T, users$conversationMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends users$messagesArgs<ExtArgs> = {}>(args?: Subset<T, users$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly imageUrl: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.sent
   */
  export type users$sentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requests
     */
    select?: requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the requests
     */
    omit?: requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestsInclude<ExtArgs> | null
    where?: requestsWhereInput
    orderBy?: requestsOrderByWithRelationInput | requestsOrderByWithRelationInput[]
    cursor?: requestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestsScalarFieldEnum | RequestsScalarFieldEnum[]
  }

  /**
   * users.received
   */
  export type users$receivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requests
     */
    select?: requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the requests
     */
    omit?: requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestsInclude<ExtArgs> | null
    where?: requestsWhereInput
    orderBy?: requestsOrderByWithRelationInput | requestsOrderByWithRelationInput[]
    cursor?: requestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestsScalarFieldEnum | RequestsScalarFieldEnum[]
  }

  /**
   * users.friends1
   */
  export type users$friends1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    where?: friendsWhereInput
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    cursor?: friendsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * users.friends2
   */
  export type users$friends2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    where?: friendsWhereInput
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    cursor?: friendsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * users.conversationMembers
   */
  export type users$conversationMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversationMembers
     */
    select?: conversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversationMembers
     */
    omit?: conversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationMembersInclude<ExtArgs> | null
    where?: conversationMembersWhereInput
    orderBy?: conversationMembersOrderByWithRelationInput | conversationMembersOrderByWithRelationInput[]
    cursor?: conversationMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationMembersScalarFieldEnum | ConversationMembersScalarFieldEnum[]
  }

  /**
   * users.messages
   */
  export type users$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model requests
   */

  export type AggregateRequests = {
    _count: RequestsCountAggregateOutputType | null
    _min: RequestsMinAggregateOutputType | null
    _max: RequestsMaxAggregateOutputType | null
  }

  export type RequestsMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    createdAt: Date | null
  }

  export type RequestsMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    createdAt: Date | null
  }

  export type RequestsCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    createdAt: number
    _all: number
  }


  export type RequestsMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    createdAt?: true
  }

  export type RequestsMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    createdAt?: true
  }

  export type RequestsCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    createdAt?: true
    _all?: true
  }

  export type RequestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which requests to aggregate.
     */
    where?: requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of requests to fetch.
     */
    orderBy?: requestsOrderByWithRelationInput | requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned requests
    **/
    _count?: true | RequestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestsMaxAggregateInputType
  }

  export type GetRequestsAggregateType<T extends RequestsAggregateArgs> = {
        [P in keyof T & keyof AggregateRequests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequests[P]>
      : GetScalarType<T[P], AggregateRequests[P]>
  }




  export type requestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: requestsWhereInput
    orderBy?: requestsOrderByWithAggregationInput | requestsOrderByWithAggregationInput[]
    by: RequestsScalarFieldEnum[] | RequestsScalarFieldEnum
    having?: requestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestsCountAggregateInputType | true
    _min?: RequestsMinAggregateInputType
    _max?: RequestsMaxAggregateInputType
  }

  export type RequestsGroupByOutputType = {
    id: string
    senderId: string
    receiverId: string
    createdAt: Date
    _count: RequestsCountAggregateOutputType | null
    _min: RequestsMinAggregateOutputType | null
    _max: RequestsMaxAggregateOutputType | null
  }

  type GetRequestsGroupByPayload<T extends requestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestsGroupByOutputType[P]>
            : GetScalarType<T[P], RequestsGroupByOutputType[P]>
        }
      >
    >


  export type requestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    sender?: boolean | usersDefaultArgs<ExtArgs>
    receiver?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requests"]>



  export type requestsSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
  }

  export type requestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "createdAt", ExtArgs["result"]["requests"]>
  export type requestsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | usersDefaultArgs<ExtArgs>
    receiver?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $requestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "requests"
    objects: {
      sender: Prisma.$usersPayload<ExtArgs>
      receiver: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string
      receiverId: string
      createdAt: Date
    }, ExtArgs["result"]["requests"]>
    composites: {}
  }

  type requestsGetPayload<S extends boolean | null | undefined | requestsDefaultArgs> = $Result.GetResult<Prisma.$requestsPayload, S>

  type requestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<requestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestsCountAggregateInputType | true
    }

  export interface requestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['requests'], meta: { name: 'requests' } }
    /**
     * Find zero or one Requests that matches the filter.
     * @param {requestsFindUniqueArgs} args - Arguments to find a Requests
     * @example
     * // Get one Requests
     * const requests = await prisma.requests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends requestsFindUniqueArgs>(args: SelectSubset<T, requestsFindUniqueArgs<ExtArgs>>): Prisma__requestsClient<$Result.GetResult<Prisma.$requestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Requests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {requestsFindUniqueOrThrowArgs} args - Arguments to find a Requests
     * @example
     * // Get one Requests
     * const requests = await prisma.requests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends requestsFindUniqueOrThrowArgs>(args: SelectSubset<T, requestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__requestsClient<$Result.GetResult<Prisma.$requestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requestsFindFirstArgs} args - Arguments to find a Requests
     * @example
     * // Get one Requests
     * const requests = await prisma.requests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends requestsFindFirstArgs>(args?: SelectSubset<T, requestsFindFirstArgs<ExtArgs>>): Prisma__requestsClient<$Result.GetResult<Prisma.$requestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Requests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requestsFindFirstOrThrowArgs} args - Arguments to find a Requests
     * @example
     * // Get one Requests
     * const requests = await prisma.requests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends requestsFindFirstOrThrowArgs>(args?: SelectSubset<T, requestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__requestsClient<$Result.GetResult<Prisma.$requestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requests
     * const requests = await prisma.requests.findMany()
     * 
     * // Get first 10 Requests
     * const requests = await prisma.requests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestsWithIdOnly = await prisma.requests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends requestsFindManyArgs>(args?: SelectSubset<T, requestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Requests.
     * @param {requestsCreateArgs} args - Arguments to create a Requests.
     * @example
     * // Create one Requests
     * const Requests = await prisma.requests.create({
     *   data: {
     *     // ... data to create a Requests
     *   }
     * })
     * 
     */
    create<T extends requestsCreateArgs>(args: SelectSubset<T, requestsCreateArgs<ExtArgs>>): Prisma__requestsClient<$Result.GetResult<Prisma.$requestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Requests.
     * @param {requestsCreateManyArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const requests = await prisma.requests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends requestsCreateManyArgs>(args?: SelectSubset<T, requestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Requests.
     * @param {requestsDeleteArgs} args - Arguments to delete one Requests.
     * @example
     * // Delete one Requests
     * const Requests = await prisma.requests.delete({
     *   where: {
     *     // ... filter to delete one Requests
     *   }
     * })
     * 
     */
    delete<T extends requestsDeleteArgs>(args: SelectSubset<T, requestsDeleteArgs<ExtArgs>>): Prisma__requestsClient<$Result.GetResult<Prisma.$requestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Requests.
     * @param {requestsUpdateArgs} args - Arguments to update one Requests.
     * @example
     * // Update one Requests
     * const requests = await prisma.requests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends requestsUpdateArgs>(args: SelectSubset<T, requestsUpdateArgs<ExtArgs>>): Prisma__requestsClient<$Result.GetResult<Prisma.$requestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Requests.
     * @param {requestsDeleteManyArgs} args - Arguments to filter Requests to delete.
     * @example
     * // Delete a few Requests
     * const { count } = await prisma.requests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends requestsDeleteManyArgs>(args?: SelectSubset<T, requestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requests
     * const requests = await prisma.requests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends requestsUpdateManyArgs>(args: SelectSubset<T, requestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Requests.
     * @param {requestsUpsertArgs} args - Arguments to update or create a Requests.
     * @example
     * // Update or create a Requests
     * const requests = await prisma.requests.upsert({
     *   create: {
     *     // ... data to create a Requests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Requests we want to update
     *   }
     * })
     */
    upsert<T extends requestsUpsertArgs>(args: SelectSubset<T, requestsUpsertArgs<ExtArgs>>): Prisma__requestsClient<$Result.GetResult<Prisma.$requestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requestsCountArgs} args - Arguments to filter Requests to count.
     * @example
     * // Count the number of Requests
     * const count = await prisma.requests.count({
     *   where: {
     *     // ... the filter for the Requests we want to count
     *   }
     * })
    **/
    count<T extends requestsCountArgs>(
      args?: Subset<T, requestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RequestsAggregateArgs>(args: Subset<T, RequestsAggregateArgs>): Prisma.PrismaPromise<GetRequestsAggregateType<T>>

    /**
     * Group by Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requestsGroupByArgs} args - Group by arguments.
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
      T extends requestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: requestsGroupByArgs['orderBy'] }
        : { orderBy?: requestsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, requestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the requests model
   */
  readonly fields: requestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for requests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__requestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the requests model
   */
  interface requestsFieldRefs {
    readonly id: FieldRef<"requests", 'String'>
    readonly senderId: FieldRef<"requests", 'String'>
    readonly receiverId: FieldRef<"requests", 'String'>
    readonly createdAt: FieldRef<"requests", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * requests findUnique
   */
  export type requestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requests
     */
    select?: requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the requests
     */
    omit?: requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestsInclude<ExtArgs> | null
    /**
     * Filter, which requests to fetch.
     */
    where: requestsWhereUniqueInput
  }

  /**
   * requests findUniqueOrThrow
   */
  export type requestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requests
     */
    select?: requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the requests
     */
    omit?: requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestsInclude<ExtArgs> | null
    /**
     * Filter, which requests to fetch.
     */
    where: requestsWhereUniqueInput
  }

  /**
   * requests findFirst
   */
  export type requestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requests
     */
    select?: requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the requests
     */
    omit?: requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestsInclude<ExtArgs> | null
    /**
     * Filter, which requests to fetch.
     */
    where?: requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of requests to fetch.
     */
    orderBy?: requestsOrderByWithRelationInput | requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for requests.
     */
    cursor?: requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of requests.
     */
    distinct?: RequestsScalarFieldEnum | RequestsScalarFieldEnum[]
  }

  /**
   * requests findFirstOrThrow
   */
  export type requestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requests
     */
    select?: requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the requests
     */
    omit?: requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestsInclude<ExtArgs> | null
    /**
     * Filter, which requests to fetch.
     */
    where?: requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of requests to fetch.
     */
    orderBy?: requestsOrderByWithRelationInput | requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for requests.
     */
    cursor?: requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of requests.
     */
    distinct?: RequestsScalarFieldEnum | RequestsScalarFieldEnum[]
  }

  /**
   * requests findMany
   */
  export type requestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requests
     */
    select?: requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the requests
     */
    omit?: requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestsInclude<ExtArgs> | null
    /**
     * Filter, which requests to fetch.
     */
    where?: requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of requests to fetch.
     */
    orderBy?: requestsOrderByWithRelationInput | requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing requests.
     */
    cursor?: requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` requests.
     */
    skip?: number
    distinct?: RequestsScalarFieldEnum | RequestsScalarFieldEnum[]
  }

  /**
   * requests create
   */
  export type requestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requests
     */
    select?: requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the requests
     */
    omit?: requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestsInclude<ExtArgs> | null
    /**
     * The data needed to create a requests.
     */
    data: XOR<requestsCreateInput, requestsUncheckedCreateInput>
  }

  /**
   * requests createMany
   */
  export type requestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many requests.
     */
    data: requestsCreateManyInput | requestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * requests update
   */
  export type requestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requests
     */
    select?: requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the requests
     */
    omit?: requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestsInclude<ExtArgs> | null
    /**
     * The data needed to update a requests.
     */
    data: XOR<requestsUpdateInput, requestsUncheckedUpdateInput>
    /**
     * Choose, which requests to update.
     */
    where: requestsWhereUniqueInput
  }

  /**
   * requests updateMany
   */
  export type requestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update requests.
     */
    data: XOR<requestsUpdateManyMutationInput, requestsUncheckedUpdateManyInput>
    /**
     * Filter which requests to update
     */
    where?: requestsWhereInput
    /**
     * Limit how many requests to update.
     */
    limit?: number
  }

  /**
   * requests upsert
   */
  export type requestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requests
     */
    select?: requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the requests
     */
    omit?: requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestsInclude<ExtArgs> | null
    /**
     * The filter to search for the requests to update in case it exists.
     */
    where: requestsWhereUniqueInput
    /**
     * In case the requests found by the `where` argument doesn't exist, create a new requests with this data.
     */
    create: XOR<requestsCreateInput, requestsUncheckedCreateInput>
    /**
     * In case the requests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<requestsUpdateInput, requestsUncheckedUpdateInput>
  }

  /**
   * requests delete
   */
  export type requestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requests
     */
    select?: requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the requests
     */
    omit?: requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestsInclude<ExtArgs> | null
    /**
     * Filter which requests to delete.
     */
    where: requestsWhereUniqueInput
  }

  /**
   * requests deleteMany
   */
  export type requestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which requests to delete
     */
    where?: requestsWhereInput
    /**
     * Limit how many requests to delete.
     */
    limit?: number
  }

  /**
   * requests without action
   */
  export type requestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requests
     */
    select?: requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the requests
     */
    omit?: requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestsInclude<ExtArgs> | null
  }


  /**
   * Model friends
   */

  export type AggregateFriends = {
    _count: FriendsCountAggregateOutputType | null
    _min: FriendsMinAggregateOutputType | null
    _max: FriendsMaxAggregateOutputType | null
  }

  export type FriendsMinAggregateOutputType = {
    id: string | null
    user1Id: string | null
    user2Id: string | null
    conversationId: string | null
    createdAt: Date | null
  }

  export type FriendsMaxAggregateOutputType = {
    id: string | null
    user1Id: string | null
    user2Id: string | null
    conversationId: string | null
    createdAt: Date | null
  }

  export type FriendsCountAggregateOutputType = {
    id: number
    user1Id: number
    user2Id: number
    conversationId: number
    createdAt: number
    _all: number
  }


  export type FriendsMinAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    conversationId?: true
    createdAt?: true
  }

  export type FriendsMaxAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    conversationId?: true
    createdAt?: true
  }

  export type FriendsCountAggregateInputType = {
    id?: true
    user1Id?: true
    user2Id?: true
    conversationId?: true
    createdAt?: true
    _all?: true
  }

  export type FriendsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which friends to aggregate.
     */
    where?: friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends to fetch.
     */
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned friends
    **/
    _count?: true | FriendsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendsMaxAggregateInputType
  }

  export type GetFriendsAggregateType<T extends FriendsAggregateArgs> = {
        [P in keyof T & keyof AggregateFriends]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriends[P]>
      : GetScalarType<T[P], AggregateFriends[P]>
  }




  export type friendsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friendsWhereInput
    orderBy?: friendsOrderByWithAggregationInput | friendsOrderByWithAggregationInput[]
    by: FriendsScalarFieldEnum[] | FriendsScalarFieldEnum
    having?: friendsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendsCountAggregateInputType | true
    _min?: FriendsMinAggregateInputType
    _max?: FriendsMaxAggregateInputType
  }

  export type FriendsGroupByOutputType = {
    id: string
    user1Id: string
    user2Id: string
    conversationId: string
    createdAt: Date
    _count: FriendsCountAggregateOutputType | null
    _min: FriendsMinAggregateOutputType | null
    _max: FriendsMaxAggregateOutputType | null
  }

  type GetFriendsGroupByPayload<T extends friendsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendsGroupByOutputType[P]>
            : GetScalarType<T[P], FriendsGroupByOutputType[P]>
        }
      >
    >


  export type friendsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    conversationId?: boolean
    createdAt?: boolean
    user1?: boolean | usersDefaultArgs<ExtArgs>
    user2?: boolean | usersDefaultArgs<ExtArgs>
    conversation?: boolean | conversationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friends"]>



  export type friendsSelectScalar = {
    id?: boolean
    user1Id?: boolean
    user2Id?: boolean
    conversationId?: boolean
    createdAt?: boolean
  }

  export type friendsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user1Id" | "user2Id" | "conversationId" | "createdAt", ExtArgs["result"]["friends"]>
  export type friendsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | usersDefaultArgs<ExtArgs>
    user2?: boolean | usersDefaultArgs<ExtArgs>
    conversation?: boolean | conversationsDefaultArgs<ExtArgs>
  }

  export type $friendsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "friends"
    objects: {
      user1: Prisma.$usersPayload<ExtArgs>
      user2: Prisma.$usersPayload<ExtArgs>
      conversation: Prisma.$conversationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user1Id: string
      user2Id: string
      conversationId: string
      createdAt: Date
    }, ExtArgs["result"]["friends"]>
    composites: {}
  }

  type friendsGetPayload<S extends boolean | null | undefined | friendsDefaultArgs> = $Result.GetResult<Prisma.$friendsPayload, S>

  type friendsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<friendsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendsCountAggregateInputType | true
    }

  export interface friendsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['friends'], meta: { name: 'friends' } }
    /**
     * Find zero or one Friends that matches the filter.
     * @param {friendsFindUniqueArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends friendsFindUniqueArgs>(args: SelectSubset<T, friendsFindUniqueArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friends that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {friendsFindUniqueOrThrowArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends friendsFindUniqueOrThrowArgs>(args: SelectSubset<T, friendsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsFindFirstArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends friendsFindFirstArgs>(args?: SelectSubset<T, friendsFindFirstArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friends that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsFindFirstOrThrowArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends friendsFindFirstOrThrowArgs>(args?: SelectSubset<T, friendsFindFirstOrThrowArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friends
     * const friends = await prisma.friends.findMany()
     * 
     * // Get first 10 Friends
     * const friends = await prisma.friends.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendsWithIdOnly = await prisma.friends.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends friendsFindManyArgs>(args?: SelectSubset<T, friendsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friends.
     * @param {friendsCreateArgs} args - Arguments to create a Friends.
     * @example
     * // Create one Friends
     * const Friends = await prisma.friends.create({
     *   data: {
     *     // ... data to create a Friends
     *   }
     * })
     * 
     */
    create<T extends friendsCreateArgs>(args: SelectSubset<T, friendsCreateArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friends.
     * @param {friendsCreateManyArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friends = await prisma.friends.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends friendsCreateManyArgs>(args?: SelectSubset<T, friendsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Friends.
     * @param {friendsDeleteArgs} args - Arguments to delete one Friends.
     * @example
     * // Delete one Friends
     * const Friends = await prisma.friends.delete({
     *   where: {
     *     // ... filter to delete one Friends
     *   }
     * })
     * 
     */
    delete<T extends friendsDeleteArgs>(args: SelectSubset<T, friendsDeleteArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friends.
     * @param {friendsUpdateArgs} args - Arguments to update one Friends.
     * @example
     * // Update one Friends
     * const friends = await prisma.friends.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends friendsUpdateArgs>(args: SelectSubset<T, friendsUpdateArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friends.
     * @param {friendsDeleteManyArgs} args - Arguments to filter Friends to delete.
     * @example
     * // Delete a few Friends
     * const { count } = await prisma.friends.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends friendsDeleteManyArgs>(args?: SelectSubset<T, friendsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friends
     * const friends = await prisma.friends.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends friendsUpdateManyArgs>(args: SelectSubset<T, friendsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Friends.
     * @param {friendsUpsertArgs} args - Arguments to update or create a Friends.
     * @example
     * // Update or create a Friends
     * const friends = await prisma.friends.upsert({
     *   create: {
     *     // ... data to create a Friends
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friends we want to update
     *   }
     * })
     */
    upsert<T extends friendsUpsertArgs>(args: SelectSubset<T, friendsUpsertArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsCountArgs} args - Arguments to filter Friends to count.
     * @example
     * // Count the number of Friends
     * const count = await prisma.friends.count({
     *   where: {
     *     // ... the filter for the Friends we want to count
     *   }
     * })
    **/
    count<T extends friendsCountArgs>(
      args?: Subset<T, friendsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FriendsAggregateArgs>(args: Subset<T, FriendsAggregateArgs>): Prisma.PrismaPromise<GetFriendsAggregateType<T>>

    /**
     * Group by Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsGroupByArgs} args - Group by arguments.
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
      T extends friendsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: friendsGroupByArgs['orderBy'] }
        : { orderBy?: friendsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, friendsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the friends model
   */
  readonly fields: friendsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for friends.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__friendsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user1<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user2<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conversation<T extends conversationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, conversationsDefaultArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the friends model
   */
  interface friendsFieldRefs {
    readonly id: FieldRef<"friends", 'String'>
    readonly user1Id: FieldRef<"friends", 'String'>
    readonly user2Id: FieldRef<"friends", 'String'>
    readonly conversationId: FieldRef<"friends", 'String'>
    readonly createdAt: FieldRef<"friends", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * friends findUnique
   */
  export type friendsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where: friendsWhereUniqueInput
  }

  /**
   * friends findUniqueOrThrow
   */
  export type friendsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where: friendsWhereUniqueInput
  }

  /**
   * friends findFirst
   */
  export type friendsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where?: friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends to fetch.
     */
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for friends.
     */
    cursor?: friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of friends.
     */
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * friends findFirstOrThrow
   */
  export type friendsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where?: friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends to fetch.
     */
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for friends.
     */
    cursor?: friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of friends.
     */
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * friends findMany
   */
  export type friendsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where?: friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends to fetch.
     */
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing friends.
     */
    cursor?: friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends.
     */
    skip?: number
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * friends create
   */
  export type friendsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * The data needed to create a friends.
     */
    data: XOR<friendsCreateInput, friendsUncheckedCreateInput>
  }

  /**
   * friends createMany
   */
  export type friendsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many friends.
     */
    data: friendsCreateManyInput | friendsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * friends update
   */
  export type friendsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * The data needed to update a friends.
     */
    data: XOR<friendsUpdateInput, friendsUncheckedUpdateInput>
    /**
     * Choose, which friends to update.
     */
    where: friendsWhereUniqueInput
  }

  /**
   * friends updateMany
   */
  export type friendsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update friends.
     */
    data: XOR<friendsUpdateManyMutationInput, friendsUncheckedUpdateManyInput>
    /**
     * Filter which friends to update
     */
    where?: friendsWhereInput
    /**
     * Limit how many friends to update.
     */
    limit?: number
  }

  /**
   * friends upsert
   */
  export type friendsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * The filter to search for the friends to update in case it exists.
     */
    where: friendsWhereUniqueInput
    /**
     * In case the friends found by the `where` argument doesn't exist, create a new friends with this data.
     */
    create: XOR<friendsCreateInput, friendsUncheckedCreateInput>
    /**
     * In case the friends was found with the provided `where` argument, update it with this data.
     */
    update: XOR<friendsUpdateInput, friendsUncheckedUpdateInput>
  }

  /**
   * friends delete
   */
  export type friendsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter which friends to delete.
     */
    where: friendsWhereUniqueInput
  }

  /**
   * friends deleteMany
   */
  export type friendsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which friends to delete
     */
    where?: friendsWhereInput
    /**
     * Limit how many friends to delete.
     */
    limit?: number
  }

  /**
   * friends without action
   */
  export type friendsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
  }


  /**
   * Model conversations
   */

  export type AggregateConversations = {
    _count: ConversationsCountAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  export type ConversationsMinAggregateOutputType = {
    id: string | null
    name: string | null
    isGroup: boolean | null
    lastMessageId: string | null
    createdAt: Date | null
  }

  export type ConversationsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isGroup: boolean | null
    lastMessageId: string | null
    createdAt: Date | null
  }

  export type ConversationsCountAggregateOutputType = {
    id: number
    name: number
    isGroup: number
    lastMessageId: number
    createdAt: number
    _all: number
  }


  export type ConversationsMinAggregateInputType = {
    id?: true
    name?: true
    isGroup?: true
    lastMessageId?: true
    createdAt?: true
  }

  export type ConversationsMaxAggregateInputType = {
    id?: true
    name?: true
    isGroup?: true
    lastMessageId?: true
    createdAt?: true
  }

  export type ConversationsCountAggregateInputType = {
    id?: true
    name?: true
    isGroup?: true
    lastMessageId?: true
    createdAt?: true
    _all?: true
  }

  export type ConversationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversations to aggregate.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned conversations
    **/
    _count?: true | ConversationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationsMaxAggregateInputType
  }

  export type GetConversationsAggregateType<T extends ConversationsAggregateArgs> = {
        [P in keyof T & keyof AggregateConversations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversations[P]>
      : GetScalarType<T[P], AggregateConversations[P]>
  }




  export type conversationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversationsWhereInput
    orderBy?: conversationsOrderByWithAggregationInput | conversationsOrderByWithAggregationInput[]
    by: ConversationsScalarFieldEnum[] | ConversationsScalarFieldEnum
    having?: conversationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationsCountAggregateInputType | true
    _min?: ConversationsMinAggregateInputType
    _max?: ConversationsMaxAggregateInputType
  }

  export type ConversationsGroupByOutputType = {
    id: string
    name: string | null
    isGroup: boolean
    lastMessageId: string | null
    createdAt: Date
    _count: ConversationsCountAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  type GetConversationsGroupByPayload<T extends conversationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
        }
      >
    >


  export type conversationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isGroup?: boolean
    lastMessageId?: boolean
    createdAt?: boolean
    friends?: boolean | conversations$friendsArgs<ExtArgs>
    conversationMembers?: boolean | conversations$conversationMembersArgs<ExtArgs>
    messages?: boolean | conversations$messagesArgs<ExtArgs>
    lastMessage?: boolean | conversations$lastMessageArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversations"]>



  export type conversationsSelectScalar = {
    id?: boolean
    name?: boolean
    isGroup?: boolean
    lastMessageId?: boolean
    createdAt?: boolean
  }

  export type conversationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isGroup" | "lastMessageId" | "createdAt", ExtArgs["result"]["conversations"]>
  export type conversationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friends?: boolean | conversations$friendsArgs<ExtArgs>
    conversationMembers?: boolean | conversations$conversationMembersArgs<ExtArgs>
    messages?: boolean | conversations$messagesArgs<ExtArgs>
    lastMessage?: boolean | conversations$lastMessageArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $conversationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "conversations"
    objects: {
      friends: Prisma.$friendsPayload<ExtArgs>[]
      conversationMembers: Prisma.$conversationMembersPayload<ExtArgs>[]
      messages: Prisma.$messagesPayload<ExtArgs>[]
      lastMessage: Prisma.$messagesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      isGroup: boolean
      lastMessageId: string | null
      createdAt: Date
    }, ExtArgs["result"]["conversations"]>
    composites: {}
  }

  type conversationsGetPayload<S extends boolean | null | undefined | conversationsDefaultArgs> = $Result.GetResult<Prisma.$conversationsPayload, S>

  type conversationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<conversationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationsCountAggregateInputType | true
    }

  export interface conversationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['conversations'], meta: { name: 'conversations' } }
    /**
     * Find zero or one Conversations that matches the filter.
     * @param {conversationsFindUniqueArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends conversationsFindUniqueArgs>(args: SelectSubset<T, conversationsFindUniqueArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {conversationsFindUniqueOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends conversationsFindUniqueOrThrowArgs>(args: SelectSubset<T, conversationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsFindFirstArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends conversationsFindFirstArgs>(args?: SelectSubset<T, conversationsFindFirstArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsFindFirstOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends conversationsFindFirstOrThrowArgs>(args?: SelectSubset<T, conversationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversations.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationsWithIdOnly = await prisma.conversations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends conversationsFindManyArgs>(args?: SelectSubset<T, conversationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversations.
     * @param {conversationsCreateArgs} args - Arguments to create a Conversations.
     * @example
     * // Create one Conversations
     * const Conversations = await prisma.conversations.create({
     *   data: {
     *     // ... data to create a Conversations
     *   }
     * })
     * 
     */
    create<T extends conversationsCreateArgs>(args: SelectSubset<T, conversationsCreateArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {conversationsCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversations = await prisma.conversations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends conversationsCreateManyArgs>(args?: SelectSubset<T, conversationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Conversations.
     * @param {conversationsDeleteArgs} args - Arguments to delete one Conversations.
     * @example
     * // Delete one Conversations
     * const Conversations = await prisma.conversations.delete({
     *   where: {
     *     // ... filter to delete one Conversations
     *   }
     * })
     * 
     */
    delete<T extends conversationsDeleteArgs>(args: SelectSubset<T, conversationsDeleteArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversations.
     * @param {conversationsUpdateArgs} args - Arguments to update one Conversations.
     * @example
     * // Update one Conversations
     * const conversations = await prisma.conversations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends conversationsUpdateArgs>(args: SelectSubset<T, conversationsUpdateArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {conversationsDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends conversationsDeleteManyArgs>(args?: SelectSubset<T, conversationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversations = await prisma.conversations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends conversationsUpdateManyArgs>(args: SelectSubset<T, conversationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conversations.
     * @param {conversationsUpsertArgs} args - Arguments to update or create a Conversations.
     * @example
     * // Update or create a Conversations
     * const conversations = await prisma.conversations.upsert({
     *   create: {
     *     // ... data to create a Conversations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversations we want to update
     *   }
     * })
     */
    upsert<T extends conversationsUpsertArgs>(args: SelectSubset<T, conversationsUpsertArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversations.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends conversationsCountArgs>(
      args?: Subset<T, conversationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversationsAggregateArgs>(args: Subset<T, ConversationsAggregateArgs>): Prisma.PrismaPromise<GetConversationsAggregateType<T>>

    /**
     * Group by Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationsGroupByArgs} args - Group by arguments.
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
      T extends conversationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: conversationsGroupByArgs['orderBy'] }
        : { orderBy?: conversationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, conversationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the conversations model
   */
  readonly fields: conversationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for conversations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__conversationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    friends<T extends conversations$friendsArgs<ExtArgs> = {}>(args?: Subset<T, conversations$friendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversationMembers<T extends conversations$conversationMembersArgs<ExtArgs> = {}>(args?: Subset<T, conversations$conversationMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends conversations$messagesArgs<ExtArgs> = {}>(args?: Subset<T, conversations$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lastMessage<T extends conversations$lastMessageArgs<ExtArgs> = {}>(args?: Subset<T, conversations$lastMessageArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the conversations model
   */
  interface conversationsFieldRefs {
    readonly id: FieldRef<"conversations", 'String'>
    readonly name: FieldRef<"conversations", 'String'>
    readonly isGroup: FieldRef<"conversations", 'Boolean'>
    readonly lastMessageId: FieldRef<"conversations", 'String'>
    readonly createdAt: FieldRef<"conversations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * conversations findUnique
   */
  export type conversationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations findUniqueOrThrow
   */
  export type conversationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations findFirst
   */
  export type conversationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conversations.
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * conversations findFirstOrThrow
   */
  export type conversationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conversations.
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * conversations findMany
   */
  export type conversationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter, which conversations to fetch.
     */
    where?: conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversations to fetch.
     */
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing conversations.
     */
    cursor?: conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversations.
     */
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * conversations create
   */
  export type conversationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * The data needed to create a conversations.
     */
    data: XOR<conversationsCreateInput, conversationsUncheckedCreateInput>
  }

  /**
   * conversations createMany
   */
  export type conversationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many conversations.
     */
    data: conversationsCreateManyInput | conversationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * conversations update
   */
  export type conversationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * The data needed to update a conversations.
     */
    data: XOR<conversationsUpdateInput, conversationsUncheckedUpdateInput>
    /**
     * Choose, which conversations to update.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations updateMany
   */
  export type conversationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update conversations.
     */
    data: XOR<conversationsUpdateManyMutationInput, conversationsUncheckedUpdateManyInput>
    /**
     * Filter which conversations to update
     */
    where?: conversationsWhereInput
    /**
     * Limit how many conversations to update.
     */
    limit?: number
  }

  /**
   * conversations upsert
   */
  export type conversationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * The filter to search for the conversations to update in case it exists.
     */
    where: conversationsWhereUniqueInput
    /**
     * In case the conversations found by the `where` argument doesn't exist, create a new conversations with this data.
     */
    create: XOR<conversationsCreateInput, conversationsUncheckedCreateInput>
    /**
     * In case the conversations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<conversationsUpdateInput, conversationsUncheckedUpdateInput>
  }

  /**
   * conversations delete
   */
  export type conversationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    /**
     * Filter which conversations to delete.
     */
    where: conversationsWhereUniqueInput
  }

  /**
   * conversations deleteMany
   */
  export type conversationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversations to delete
     */
    where?: conversationsWhereInput
    /**
     * Limit how many conversations to delete.
     */
    limit?: number
  }

  /**
   * conversations.friends
   */
  export type conversations$friendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friends
     */
    omit?: friendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendsInclude<ExtArgs> | null
    where?: friendsWhereInput
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    cursor?: friendsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }

  /**
   * conversations.conversationMembers
   */
  export type conversations$conversationMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversationMembers
     */
    select?: conversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversationMembers
     */
    omit?: conversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationMembersInclude<ExtArgs> | null
    where?: conversationMembersWhereInput
    orderBy?: conversationMembersOrderByWithRelationInput | conversationMembersOrderByWithRelationInput[]
    cursor?: conversationMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationMembersScalarFieldEnum | ConversationMembersScalarFieldEnum[]
  }

  /**
   * conversations.messages
   */
  export type conversations$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * conversations.lastMessage
   */
  export type conversations$lastMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
  }

  /**
   * conversations without action
   */
  export type conversationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
  }


  /**
   * Model conversationMembers
   */

  export type AggregateConversationMembers = {
    _count: ConversationMembersCountAggregateOutputType | null
    _min: ConversationMembersMinAggregateOutputType | null
    _max: ConversationMembersMaxAggregateOutputType | null
  }

  export type ConversationMembersMinAggregateOutputType = {
    id: string | null
    memberId: string | null
    conversationId: string | null
    lastSeenMessageId: string | null
    createdAt: Date | null
  }

  export type ConversationMembersMaxAggregateOutputType = {
    id: string | null
    memberId: string | null
    conversationId: string | null
    lastSeenMessageId: string | null
    createdAt: Date | null
  }

  export type ConversationMembersCountAggregateOutputType = {
    id: number
    memberId: number
    conversationId: number
    lastSeenMessageId: number
    createdAt: number
    _all: number
  }


  export type ConversationMembersMinAggregateInputType = {
    id?: true
    memberId?: true
    conversationId?: true
    lastSeenMessageId?: true
    createdAt?: true
  }

  export type ConversationMembersMaxAggregateInputType = {
    id?: true
    memberId?: true
    conversationId?: true
    lastSeenMessageId?: true
    createdAt?: true
  }

  export type ConversationMembersCountAggregateInputType = {
    id?: true
    memberId?: true
    conversationId?: true
    lastSeenMessageId?: true
    createdAt?: true
    _all?: true
  }

  export type ConversationMembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversationMembers to aggregate.
     */
    where?: conversationMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversationMembers to fetch.
     */
    orderBy?: conversationMembersOrderByWithRelationInput | conversationMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: conversationMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned conversationMembers
    **/
    _count?: true | ConversationMembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMembersMaxAggregateInputType
  }

  export type GetConversationMembersAggregateType<T extends ConversationMembersAggregateArgs> = {
        [P in keyof T & keyof AggregateConversationMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversationMembers[P]>
      : GetScalarType<T[P], AggregateConversationMembers[P]>
  }




  export type conversationMembersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversationMembersWhereInput
    orderBy?: conversationMembersOrderByWithAggregationInput | conversationMembersOrderByWithAggregationInput[]
    by: ConversationMembersScalarFieldEnum[] | ConversationMembersScalarFieldEnum
    having?: conversationMembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationMembersCountAggregateInputType | true
    _min?: ConversationMembersMinAggregateInputType
    _max?: ConversationMembersMaxAggregateInputType
  }

  export type ConversationMembersGroupByOutputType = {
    id: string
    memberId: string
    conversationId: string
    lastSeenMessageId: string | null
    createdAt: Date
    _count: ConversationMembersCountAggregateOutputType | null
    _min: ConversationMembersMinAggregateOutputType | null
    _max: ConversationMembersMaxAggregateOutputType | null
  }

  type GetConversationMembersGroupByPayload<T extends conversationMembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationMembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationMembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationMembersGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationMembersGroupByOutputType[P]>
        }
      >
    >


  export type conversationMembersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    conversationId?: boolean
    lastSeenMessageId?: boolean
    createdAt?: boolean
    member?: boolean | usersDefaultArgs<ExtArgs>
    conversation?: boolean | conversationsDefaultArgs<ExtArgs>
    lastSeenMessage?: boolean | conversationMembers$lastSeenMessageArgs<ExtArgs>
  }, ExtArgs["result"]["conversationMembers"]>



  export type conversationMembersSelectScalar = {
    id?: boolean
    memberId?: boolean
    conversationId?: boolean
    lastSeenMessageId?: boolean
    createdAt?: boolean
  }

  export type conversationMembersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "memberId" | "conversationId" | "lastSeenMessageId" | "createdAt", ExtArgs["result"]["conversationMembers"]>
  export type conversationMembersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | usersDefaultArgs<ExtArgs>
    conversation?: boolean | conversationsDefaultArgs<ExtArgs>
    lastSeenMessage?: boolean | conversationMembers$lastSeenMessageArgs<ExtArgs>
  }

  export type $conversationMembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "conversationMembers"
    objects: {
      member: Prisma.$usersPayload<ExtArgs>
      conversation: Prisma.$conversationsPayload<ExtArgs>
      lastSeenMessage: Prisma.$messagesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      memberId: string
      conversationId: string
      lastSeenMessageId: string | null
      createdAt: Date
    }, ExtArgs["result"]["conversationMembers"]>
    composites: {}
  }

  type conversationMembersGetPayload<S extends boolean | null | undefined | conversationMembersDefaultArgs> = $Result.GetResult<Prisma.$conversationMembersPayload, S>

  type conversationMembersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<conversationMembersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationMembersCountAggregateInputType | true
    }

  export interface conversationMembersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['conversationMembers'], meta: { name: 'conversationMembers' } }
    /**
     * Find zero or one ConversationMembers that matches the filter.
     * @param {conversationMembersFindUniqueArgs} args - Arguments to find a ConversationMembers
     * @example
     * // Get one ConversationMembers
     * const conversationMembers = await prisma.conversationMembers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends conversationMembersFindUniqueArgs>(args: SelectSubset<T, conversationMembersFindUniqueArgs<ExtArgs>>): Prisma__conversationMembersClient<$Result.GetResult<Prisma.$conversationMembersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConversationMembers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {conversationMembersFindUniqueOrThrowArgs} args - Arguments to find a ConversationMembers
     * @example
     * // Get one ConversationMembers
     * const conversationMembers = await prisma.conversationMembers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends conversationMembersFindUniqueOrThrowArgs>(args: SelectSubset<T, conversationMembersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__conversationMembersClient<$Result.GetResult<Prisma.$conversationMembersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversationMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationMembersFindFirstArgs} args - Arguments to find a ConversationMembers
     * @example
     * // Get one ConversationMembers
     * const conversationMembers = await prisma.conversationMembers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends conversationMembersFindFirstArgs>(args?: SelectSubset<T, conversationMembersFindFirstArgs<ExtArgs>>): Prisma__conversationMembersClient<$Result.GetResult<Prisma.$conversationMembersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversationMembers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationMembersFindFirstOrThrowArgs} args - Arguments to find a ConversationMembers
     * @example
     * // Get one ConversationMembers
     * const conversationMembers = await prisma.conversationMembers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends conversationMembersFindFirstOrThrowArgs>(args?: SelectSubset<T, conversationMembersFindFirstOrThrowArgs<ExtArgs>>): Prisma__conversationMembersClient<$Result.GetResult<Prisma.$conversationMembersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConversationMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationMembersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConversationMembers
     * const conversationMembers = await prisma.conversationMembers.findMany()
     * 
     * // Get first 10 ConversationMembers
     * const conversationMembers = await prisma.conversationMembers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationMembersWithIdOnly = await prisma.conversationMembers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends conversationMembersFindManyArgs>(args?: SelectSubset<T, conversationMembersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConversationMembers.
     * @param {conversationMembersCreateArgs} args - Arguments to create a ConversationMembers.
     * @example
     * // Create one ConversationMembers
     * const ConversationMembers = await prisma.conversationMembers.create({
     *   data: {
     *     // ... data to create a ConversationMembers
     *   }
     * })
     * 
     */
    create<T extends conversationMembersCreateArgs>(args: SelectSubset<T, conversationMembersCreateArgs<ExtArgs>>): Prisma__conversationMembersClient<$Result.GetResult<Prisma.$conversationMembersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConversationMembers.
     * @param {conversationMembersCreateManyArgs} args - Arguments to create many ConversationMembers.
     * @example
     * // Create many ConversationMembers
     * const conversationMembers = await prisma.conversationMembers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends conversationMembersCreateManyArgs>(args?: SelectSubset<T, conversationMembersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ConversationMembers.
     * @param {conversationMembersDeleteArgs} args - Arguments to delete one ConversationMembers.
     * @example
     * // Delete one ConversationMembers
     * const ConversationMembers = await prisma.conversationMembers.delete({
     *   where: {
     *     // ... filter to delete one ConversationMembers
     *   }
     * })
     * 
     */
    delete<T extends conversationMembersDeleteArgs>(args: SelectSubset<T, conversationMembersDeleteArgs<ExtArgs>>): Prisma__conversationMembersClient<$Result.GetResult<Prisma.$conversationMembersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConversationMembers.
     * @param {conversationMembersUpdateArgs} args - Arguments to update one ConversationMembers.
     * @example
     * // Update one ConversationMembers
     * const conversationMembers = await prisma.conversationMembers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends conversationMembersUpdateArgs>(args: SelectSubset<T, conversationMembersUpdateArgs<ExtArgs>>): Prisma__conversationMembersClient<$Result.GetResult<Prisma.$conversationMembersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConversationMembers.
     * @param {conversationMembersDeleteManyArgs} args - Arguments to filter ConversationMembers to delete.
     * @example
     * // Delete a few ConversationMembers
     * const { count } = await prisma.conversationMembers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends conversationMembersDeleteManyArgs>(args?: SelectSubset<T, conversationMembersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationMembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConversationMembers
     * const conversationMembers = await prisma.conversationMembers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends conversationMembersUpdateManyArgs>(args: SelectSubset<T, conversationMembersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ConversationMembers.
     * @param {conversationMembersUpsertArgs} args - Arguments to update or create a ConversationMembers.
     * @example
     * // Update or create a ConversationMembers
     * const conversationMembers = await prisma.conversationMembers.upsert({
     *   create: {
     *     // ... data to create a ConversationMembers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConversationMembers we want to update
     *   }
     * })
     */
    upsert<T extends conversationMembersUpsertArgs>(args: SelectSubset<T, conversationMembersUpsertArgs<ExtArgs>>): Prisma__conversationMembersClient<$Result.GetResult<Prisma.$conversationMembersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConversationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationMembersCountArgs} args - Arguments to filter ConversationMembers to count.
     * @example
     * // Count the number of ConversationMembers
     * const count = await prisma.conversationMembers.count({
     *   where: {
     *     // ... the filter for the ConversationMembers we want to count
     *   }
     * })
    **/
    count<T extends conversationMembersCountArgs>(
      args?: Subset<T, conversationMembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationMembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConversationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversationMembersAggregateArgs>(args: Subset<T, ConversationMembersAggregateArgs>): Prisma.PrismaPromise<GetConversationMembersAggregateType<T>>

    /**
     * Group by ConversationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversationMembersGroupByArgs} args - Group by arguments.
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
      T extends conversationMembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: conversationMembersGroupByArgs['orderBy'] }
        : { orderBy?: conversationMembersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, conversationMembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the conversationMembers model
   */
  readonly fields: conversationMembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for conversationMembers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__conversationMembersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conversation<T extends conversationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, conversationsDefaultArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lastSeenMessage<T extends conversationMembers$lastSeenMessageArgs<ExtArgs> = {}>(args?: Subset<T, conversationMembers$lastSeenMessageArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the conversationMembers model
   */
  interface conversationMembersFieldRefs {
    readonly id: FieldRef<"conversationMembers", 'String'>
    readonly memberId: FieldRef<"conversationMembers", 'String'>
    readonly conversationId: FieldRef<"conversationMembers", 'String'>
    readonly lastSeenMessageId: FieldRef<"conversationMembers", 'String'>
    readonly createdAt: FieldRef<"conversationMembers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * conversationMembers findUnique
   */
  export type conversationMembersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversationMembers
     */
    select?: conversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversationMembers
     */
    omit?: conversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationMembersInclude<ExtArgs> | null
    /**
     * Filter, which conversationMembers to fetch.
     */
    where: conversationMembersWhereUniqueInput
  }

  /**
   * conversationMembers findUniqueOrThrow
   */
  export type conversationMembersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversationMembers
     */
    select?: conversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversationMembers
     */
    omit?: conversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationMembersInclude<ExtArgs> | null
    /**
     * Filter, which conversationMembers to fetch.
     */
    where: conversationMembersWhereUniqueInput
  }

  /**
   * conversationMembers findFirst
   */
  export type conversationMembersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversationMembers
     */
    select?: conversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversationMembers
     */
    omit?: conversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationMembersInclude<ExtArgs> | null
    /**
     * Filter, which conversationMembers to fetch.
     */
    where?: conversationMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversationMembers to fetch.
     */
    orderBy?: conversationMembersOrderByWithRelationInput | conversationMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conversationMembers.
     */
    cursor?: conversationMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversationMembers.
     */
    distinct?: ConversationMembersScalarFieldEnum | ConversationMembersScalarFieldEnum[]
  }

  /**
   * conversationMembers findFirstOrThrow
   */
  export type conversationMembersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversationMembers
     */
    select?: conversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversationMembers
     */
    omit?: conversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationMembersInclude<ExtArgs> | null
    /**
     * Filter, which conversationMembers to fetch.
     */
    where?: conversationMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversationMembers to fetch.
     */
    orderBy?: conversationMembersOrderByWithRelationInput | conversationMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conversationMembers.
     */
    cursor?: conversationMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversationMembers.
     */
    distinct?: ConversationMembersScalarFieldEnum | ConversationMembersScalarFieldEnum[]
  }

  /**
   * conversationMembers findMany
   */
  export type conversationMembersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversationMembers
     */
    select?: conversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversationMembers
     */
    omit?: conversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationMembersInclude<ExtArgs> | null
    /**
     * Filter, which conversationMembers to fetch.
     */
    where?: conversationMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversationMembers to fetch.
     */
    orderBy?: conversationMembersOrderByWithRelationInput | conversationMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing conversationMembers.
     */
    cursor?: conversationMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversationMembers.
     */
    skip?: number
    distinct?: ConversationMembersScalarFieldEnum | ConversationMembersScalarFieldEnum[]
  }

  /**
   * conversationMembers create
   */
  export type conversationMembersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversationMembers
     */
    select?: conversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversationMembers
     */
    omit?: conversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationMembersInclude<ExtArgs> | null
    /**
     * The data needed to create a conversationMembers.
     */
    data: XOR<conversationMembersCreateInput, conversationMembersUncheckedCreateInput>
  }

  /**
   * conversationMembers createMany
   */
  export type conversationMembersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many conversationMembers.
     */
    data: conversationMembersCreateManyInput | conversationMembersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * conversationMembers update
   */
  export type conversationMembersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversationMembers
     */
    select?: conversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversationMembers
     */
    omit?: conversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationMembersInclude<ExtArgs> | null
    /**
     * The data needed to update a conversationMembers.
     */
    data: XOR<conversationMembersUpdateInput, conversationMembersUncheckedUpdateInput>
    /**
     * Choose, which conversationMembers to update.
     */
    where: conversationMembersWhereUniqueInput
  }

  /**
   * conversationMembers updateMany
   */
  export type conversationMembersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update conversationMembers.
     */
    data: XOR<conversationMembersUpdateManyMutationInput, conversationMembersUncheckedUpdateManyInput>
    /**
     * Filter which conversationMembers to update
     */
    where?: conversationMembersWhereInput
    /**
     * Limit how many conversationMembers to update.
     */
    limit?: number
  }

  /**
   * conversationMembers upsert
   */
  export type conversationMembersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversationMembers
     */
    select?: conversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversationMembers
     */
    omit?: conversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationMembersInclude<ExtArgs> | null
    /**
     * The filter to search for the conversationMembers to update in case it exists.
     */
    where: conversationMembersWhereUniqueInput
    /**
     * In case the conversationMembers found by the `where` argument doesn't exist, create a new conversationMembers with this data.
     */
    create: XOR<conversationMembersCreateInput, conversationMembersUncheckedCreateInput>
    /**
     * In case the conversationMembers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<conversationMembersUpdateInput, conversationMembersUncheckedUpdateInput>
  }

  /**
   * conversationMembers delete
   */
  export type conversationMembersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversationMembers
     */
    select?: conversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversationMembers
     */
    omit?: conversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationMembersInclude<ExtArgs> | null
    /**
     * Filter which conversationMembers to delete.
     */
    where: conversationMembersWhereUniqueInput
  }

  /**
   * conversationMembers deleteMany
   */
  export type conversationMembersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversationMembers to delete
     */
    where?: conversationMembersWhereInput
    /**
     * Limit how many conversationMembers to delete.
     */
    limit?: number
  }

  /**
   * conversationMembers.lastSeenMessage
   */
  export type conversationMembers$lastSeenMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
  }

  /**
   * conversationMembers without action
   */
  export type conversationMembersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversationMembers
     */
    select?: conversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversationMembers
     */
    omit?: conversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationMembersInclude<ExtArgs> | null
  }


  /**
   * Model messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    conversationId: string | null
    type: string | null
    createdAt: Date | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    conversationId: string | null
    type: string | null
    createdAt: Date | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    senderId: number
    conversationId: number
    type: number
    content: number
    createdAt: number
    _all: number
  }


  export type MessagesMinAggregateInputType = {
    id?: true
    senderId?: true
    conversationId?: true
    type?: true
    createdAt?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    senderId?: true
    conversationId?: true
    type?: true
    createdAt?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    senderId?: true
    conversationId?: true
    type?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to aggregate.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithAggregationInput | messagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: string
    senderId: string
    conversationId: string
    type: string
    content: JsonValue
    createdAt: Date
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    conversationId?: boolean
    type?: boolean
    content?: boolean
    createdAt?: boolean
    sender?: boolean | usersDefaultArgs<ExtArgs>
    conversation?: boolean | conversationsDefaultArgs<ExtArgs>
    conversationMembers?: boolean | messages$conversationMembersArgs<ExtArgs>
    conversations?: boolean | messages$conversationsArgs<ExtArgs>
    _count?: boolean | MessagesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>



  export type messagesSelectScalar = {
    id?: boolean
    senderId?: boolean
    conversationId?: boolean
    type?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type messagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "conversationId" | "type" | "content" | "createdAt", ExtArgs["result"]["messages"]>
  export type messagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | usersDefaultArgs<ExtArgs>
    conversation?: boolean | conversationsDefaultArgs<ExtArgs>
    conversationMembers?: boolean | messages$conversationMembersArgs<ExtArgs>
    conversations?: boolean | messages$conversationsArgs<ExtArgs>
    _count?: boolean | MessagesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "messages"
    objects: {
      sender: Prisma.$usersPayload<ExtArgs>
      conversation: Prisma.$conversationsPayload<ExtArgs>
      conversationMembers: Prisma.$conversationMembersPayload<ExtArgs>[]
      conversations: Prisma.$conversationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string
      conversationId: string
      type: string
      content: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type messagesGetPayload<S extends boolean | null | undefined | messagesDefaultArgs> = $Result.GetResult<Prisma.$messagesPayload, S>

  type messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['messages'], meta: { name: 'messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {messagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messagesFindUniqueArgs>(args: SelectSubset<T, messagesFindUniqueArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messagesFindFirstArgs>(args?: SelectSubset<T, messagesFindFirstArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messagesFindManyArgs>(args?: SelectSubset<T, messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {messagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends messagesCreateArgs>(args: SelectSubset<T, messagesCreateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messagesCreateManyArgs>(args?: SelectSubset<T, messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Messages.
     * @param {messagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends messagesDeleteArgs>(args: SelectSubset<T, messagesDeleteArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {messagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messagesUpdateArgs>(args: SelectSubset<T, messagesUpdateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messagesDeleteManyArgs>(args?: SelectSubset<T, messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messagesUpdateManyArgs>(args: SelectSubset<T, messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Messages.
     * @param {messagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends messagesUpsertArgs>(args: SelectSubset<T, messagesUpsertArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messagesCountArgs>(
      args?: Subset<T, messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesGroupByArgs} args - Group by arguments.
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
      T extends messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messagesGroupByArgs['orderBy'] }
        : { orderBy?: messagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the messages model
   */
  readonly fields: messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conversation<T extends conversationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, conversationsDefaultArgs<ExtArgs>>): Prisma__conversationsClient<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conversationMembers<T extends messages$conversationMembersArgs<ExtArgs> = {}>(args?: Subset<T, messages$conversationMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversations<T extends messages$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, messages$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the messages model
   */
  interface messagesFieldRefs {
    readonly id: FieldRef<"messages", 'String'>
    readonly senderId: FieldRef<"messages", 'String'>
    readonly conversationId: FieldRef<"messages", 'String'>
    readonly type: FieldRef<"messages", 'String'>
    readonly content: FieldRef<"messages", 'Json'>
    readonly createdAt: FieldRef<"messages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * messages findUnique
   */
  export type messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findUniqueOrThrow
   */
  export type messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findFirst
   */
  export type messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findFirstOrThrow
   */
  export type messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findMany
   */
  export type messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages create
   */
  export type messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to create a messages.
     */
    data: XOR<messagesCreateInput, messagesUncheckedCreateInput>
  }

  /**
   * messages createMany
   */
  export type messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messages update
   */
  export type messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to update a messages.
     */
    data: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
    /**
     * Choose, which messages to update.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages updateMany
   */
  export type messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * messages upsert
   */
  export type messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The filter to search for the messages to update in case it exists.
     */
    where: messagesWhereUniqueInput
    /**
     * In case the messages found by the `where` argument doesn't exist, create a new messages with this data.
     */
    create: XOR<messagesCreateInput, messagesUncheckedCreateInput>
    /**
     * In case the messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
  }

  /**
   * messages delete
   */
  export type messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter which messages to delete.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages deleteMany
   */
  export type messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * messages.conversationMembers
   */
  export type messages$conversationMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversationMembers
     */
    select?: conversationMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversationMembers
     */
    omit?: conversationMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationMembersInclude<ExtArgs> | null
    where?: conversationMembersWhereInput
    orderBy?: conversationMembersOrderByWithRelationInput | conversationMembersOrderByWithRelationInput[]
    cursor?: conversationMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationMembersScalarFieldEnum | ConversationMembersScalarFieldEnum[]
  }

  /**
   * messages.conversations
   */
  export type messages$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversations
     */
    select?: conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversations
     */
    omit?: conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversationsInclude<ExtArgs> | null
    where?: conversationsWhereInput
    orderBy?: conversationsOrderByWithRelationInput | conversationsOrderByWithRelationInput[]
    cursor?: conversationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * messages without action
   */
  export type messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    username: 'username',
    password: 'password',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const RequestsScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    createdAt: 'createdAt'
  };

  export type RequestsScalarFieldEnum = (typeof RequestsScalarFieldEnum)[keyof typeof RequestsScalarFieldEnum]


  export const FriendsScalarFieldEnum: {
    id: 'id',
    user1Id: 'user1Id',
    user2Id: 'user2Id',
    conversationId: 'conversationId',
    createdAt: 'createdAt'
  };

  export type FriendsScalarFieldEnum = (typeof FriendsScalarFieldEnum)[keyof typeof FriendsScalarFieldEnum]


  export const ConversationsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isGroup: 'isGroup',
    lastMessageId: 'lastMessageId',
    createdAt: 'createdAt'
  };

  export type ConversationsScalarFieldEnum = (typeof ConversationsScalarFieldEnum)[keyof typeof ConversationsScalarFieldEnum]


  export const ConversationMembersScalarFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    conversationId: 'conversationId',
    lastSeenMessageId: 'lastSeenMessageId',
    createdAt: 'createdAt'
  };

  export type ConversationMembersScalarFieldEnum = (typeof ConversationMembersScalarFieldEnum)[keyof typeof ConversationMembersScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    conversationId: 'conversationId',
    type: 'type',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const usersOrderByRelevanceFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    username: 'username',
    password: 'password',
    email: 'email'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const requestsOrderByRelevanceFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId'
  };

  export type requestsOrderByRelevanceFieldEnum = (typeof requestsOrderByRelevanceFieldEnum)[keyof typeof requestsOrderByRelevanceFieldEnum]


  export const friendsOrderByRelevanceFieldEnum: {
    id: 'id',
    user1Id: 'user1Id',
    user2Id: 'user2Id',
    conversationId: 'conversationId'
  };

  export type friendsOrderByRelevanceFieldEnum = (typeof friendsOrderByRelevanceFieldEnum)[keyof typeof friendsOrderByRelevanceFieldEnum]


  export const conversationsOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    lastMessageId: 'lastMessageId'
  };

  export type conversationsOrderByRelevanceFieldEnum = (typeof conversationsOrderByRelevanceFieldEnum)[keyof typeof conversationsOrderByRelevanceFieldEnum]


  export const conversationMembersOrderByRelevanceFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    conversationId: 'conversationId',
    lastSeenMessageId: 'lastSeenMessageId'
  };

  export type conversationMembersOrderByRelevanceFieldEnum = (typeof conversationMembersOrderByRelevanceFieldEnum)[keyof typeof conversationMembersOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const messagesOrderByRelevanceFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    conversationId: 'conversationId',
    type: 'type'
  };

  export type messagesOrderByRelevanceFieldEnum = (typeof messagesOrderByRelevanceFieldEnum)[keyof typeof messagesOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    imageUrl?: StringNullableFilter<"users"> | string | null
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    sent?: RequestsListRelationFilter
    received?: RequestsListRelationFilter
    friends1?: FriendsListRelationFilter
    friends2?: FriendsListRelationFilter
    conversationMembers?: ConversationMembersListRelationFilter
    messages?: MessagesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sent?: requestsOrderByRelationAggregateInput
    received?: requestsOrderByRelationAggregateInput
    friends1?: friendsOrderByRelationAggregateInput
    friends2?: friendsOrderByRelationAggregateInput
    conversationMembers?: conversationMembersOrderByRelationAggregateInput
    messages?: messagesOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    imageUrl?: StringNullableFilter<"users"> | string | null
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    sent?: RequestsListRelationFilter
    received?: RequestsListRelationFilter
    friends1?: FriendsListRelationFilter
    friends2?: FriendsListRelationFilter
    conversationMembers?: ConversationMembersListRelationFilter
    messages?: MessagesListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"users"> | string | null
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type requestsWhereInput = {
    AND?: requestsWhereInput | requestsWhereInput[]
    OR?: requestsWhereInput[]
    NOT?: requestsWhereInput | requestsWhereInput[]
    id?: StringFilter<"requests"> | string
    senderId?: StringFilter<"requests"> | string
    receiverId?: StringFilter<"requests"> | string
    createdAt?: DateTimeFilter<"requests"> | Date | string
    sender?: XOR<UsersScalarRelationFilter, usersWhereInput>
    receiver?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type requestsOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    sender?: usersOrderByWithRelationInput
    receiver?: usersOrderByWithRelationInput
    _relevance?: requestsOrderByRelevanceInput
  }

  export type requestsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: requestsWhereInput | requestsWhereInput[]
    OR?: requestsWhereInput[]
    NOT?: requestsWhereInput | requestsWhereInput[]
    senderId?: StringFilter<"requests"> | string
    receiverId?: StringFilter<"requests"> | string
    createdAt?: DateTimeFilter<"requests"> | Date | string
    sender?: XOR<UsersScalarRelationFilter, usersWhereInput>
    receiver?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type requestsOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    _count?: requestsCountOrderByAggregateInput
    _max?: requestsMaxOrderByAggregateInput
    _min?: requestsMinOrderByAggregateInput
  }

  export type requestsScalarWhereWithAggregatesInput = {
    AND?: requestsScalarWhereWithAggregatesInput | requestsScalarWhereWithAggregatesInput[]
    OR?: requestsScalarWhereWithAggregatesInput[]
    NOT?: requestsScalarWhereWithAggregatesInput | requestsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"requests"> | string
    senderId?: StringWithAggregatesFilter<"requests"> | string
    receiverId?: StringWithAggregatesFilter<"requests"> | string
    createdAt?: DateTimeWithAggregatesFilter<"requests"> | Date | string
  }

  export type friendsWhereInput = {
    AND?: friendsWhereInput | friendsWhereInput[]
    OR?: friendsWhereInput[]
    NOT?: friendsWhereInput | friendsWhereInput[]
    id?: StringFilter<"friends"> | string
    user1Id?: StringFilter<"friends"> | string
    user2Id?: StringFilter<"friends"> | string
    conversationId?: StringFilter<"friends"> | string
    createdAt?: DateTimeFilter<"friends"> | Date | string
    user1?: XOR<UsersScalarRelationFilter, usersWhereInput>
    user2?: XOR<UsersScalarRelationFilter, usersWhereInput>
    conversation?: XOR<ConversationsScalarRelationFilter, conversationsWhereInput>
  }

  export type friendsOrderByWithRelationInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    user1?: usersOrderByWithRelationInput
    user2?: usersOrderByWithRelationInput
    conversation?: conversationsOrderByWithRelationInput
    _relevance?: friendsOrderByRelevanceInput
  }

  export type friendsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: friendsWhereInput | friendsWhereInput[]
    OR?: friendsWhereInput[]
    NOT?: friendsWhereInput | friendsWhereInput[]
    user1Id?: StringFilter<"friends"> | string
    user2Id?: StringFilter<"friends"> | string
    conversationId?: StringFilter<"friends"> | string
    createdAt?: DateTimeFilter<"friends"> | Date | string
    user1?: XOR<UsersScalarRelationFilter, usersWhereInput>
    user2?: XOR<UsersScalarRelationFilter, usersWhereInput>
    conversation?: XOR<ConversationsScalarRelationFilter, conversationsWhereInput>
  }, "id">

  export type friendsOrderByWithAggregationInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    _count?: friendsCountOrderByAggregateInput
    _max?: friendsMaxOrderByAggregateInput
    _min?: friendsMinOrderByAggregateInput
  }

  export type friendsScalarWhereWithAggregatesInput = {
    AND?: friendsScalarWhereWithAggregatesInput | friendsScalarWhereWithAggregatesInput[]
    OR?: friendsScalarWhereWithAggregatesInput[]
    NOT?: friendsScalarWhereWithAggregatesInput | friendsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"friends"> | string
    user1Id?: StringWithAggregatesFilter<"friends"> | string
    user2Id?: StringWithAggregatesFilter<"friends"> | string
    conversationId?: StringWithAggregatesFilter<"friends"> | string
    createdAt?: DateTimeWithAggregatesFilter<"friends"> | Date | string
  }

  export type conversationsWhereInput = {
    AND?: conversationsWhereInput | conversationsWhereInput[]
    OR?: conversationsWhereInput[]
    NOT?: conversationsWhereInput | conversationsWhereInput[]
    id?: StringFilter<"conversations"> | string
    name?: StringNullableFilter<"conversations"> | string | null
    isGroup?: BoolFilter<"conversations"> | boolean
    lastMessageId?: StringNullableFilter<"conversations"> | string | null
    createdAt?: DateTimeFilter<"conversations"> | Date | string
    friends?: FriendsListRelationFilter
    conversationMembers?: ConversationMembersListRelationFilter
    messages?: MessagesListRelationFilter
    lastMessage?: XOR<MessagesNullableScalarRelationFilter, messagesWhereInput> | null
  }

  export type conversationsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    isGroup?: SortOrder
    lastMessageId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    friends?: friendsOrderByRelationAggregateInput
    conversationMembers?: conversationMembersOrderByRelationAggregateInput
    messages?: messagesOrderByRelationAggregateInput
    lastMessage?: messagesOrderByWithRelationInput
    _relevance?: conversationsOrderByRelevanceInput
  }

  export type conversationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: conversationsWhereInput | conversationsWhereInput[]
    OR?: conversationsWhereInput[]
    NOT?: conversationsWhereInput | conversationsWhereInput[]
    name?: StringNullableFilter<"conversations"> | string | null
    isGroup?: BoolFilter<"conversations"> | boolean
    lastMessageId?: StringNullableFilter<"conversations"> | string | null
    createdAt?: DateTimeFilter<"conversations"> | Date | string
    friends?: FriendsListRelationFilter
    conversationMembers?: ConversationMembersListRelationFilter
    messages?: MessagesListRelationFilter
    lastMessage?: XOR<MessagesNullableScalarRelationFilter, messagesWhereInput> | null
  }, "id">

  export type conversationsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    isGroup?: SortOrder
    lastMessageId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: conversationsCountOrderByAggregateInput
    _max?: conversationsMaxOrderByAggregateInput
    _min?: conversationsMinOrderByAggregateInput
  }

  export type conversationsScalarWhereWithAggregatesInput = {
    AND?: conversationsScalarWhereWithAggregatesInput | conversationsScalarWhereWithAggregatesInput[]
    OR?: conversationsScalarWhereWithAggregatesInput[]
    NOT?: conversationsScalarWhereWithAggregatesInput | conversationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"conversations"> | string
    name?: StringNullableWithAggregatesFilter<"conversations"> | string | null
    isGroup?: BoolWithAggregatesFilter<"conversations"> | boolean
    lastMessageId?: StringNullableWithAggregatesFilter<"conversations"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"conversations"> | Date | string
  }

  export type conversationMembersWhereInput = {
    AND?: conversationMembersWhereInput | conversationMembersWhereInput[]
    OR?: conversationMembersWhereInput[]
    NOT?: conversationMembersWhereInput | conversationMembersWhereInput[]
    id?: StringFilter<"conversationMembers"> | string
    memberId?: StringFilter<"conversationMembers"> | string
    conversationId?: StringFilter<"conversationMembers"> | string
    lastSeenMessageId?: StringNullableFilter<"conversationMembers"> | string | null
    createdAt?: DateTimeFilter<"conversationMembers"> | Date | string
    member?: XOR<UsersScalarRelationFilter, usersWhereInput>
    conversation?: XOR<ConversationsScalarRelationFilter, conversationsWhereInput>
    lastSeenMessage?: XOR<MessagesNullableScalarRelationFilter, messagesWhereInput> | null
  }

  export type conversationMembersOrderByWithRelationInput = {
    id?: SortOrder
    memberId?: SortOrder
    conversationId?: SortOrder
    lastSeenMessageId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    member?: usersOrderByWithRelationInput
    conversation?: conversationsOrderByWithRelationInput
    lastSeenMessage?: messagesOrderByWithRelationInput
    _relevance?: conversationMembersOrderByRelevanceInput
  }

  export type conversationMembersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: conversationMembersWhereInput | conversationMembersWhereInput[]
    OR?: conversationMembersWhereInput[]
    NOT?: conversationMembersWhereInput | conversationMembersWhereInput[]
    memberId?: StringFilter<"conversationMembers"> | string
    conversationId?: StringFilter<"conversationMembers"> | string
    lastSeenMessageId?: StringNullableFilter<"conversationMembers"> | string | null
    createdAt?: DateTimeFilter<"conversationMembers"> | Date | string
    member?: XOR<UsersScalarRelationFilter, usersWhereInput>
    conversation?: XOR<ConversationsScalarRelationFilter, conversationsWhereInput>
    lastSeenMessage?: XOR<MessagesNullableScalarRelationFilter, messagesWhereInput> | null
  }, "id">

  export type conversationMembersOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrder
    conversationId?: SortOrder
    lastSeenMessageId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: conversationMembersCountOrderByAggregateInput
    _max?: conversationMembersMaxOrderByAggregateInput
    _min?: conversationMembersMinOrderByAggregateInput
  }

  export type conversationMembersScalarWhereWithAggregatesInput = {
    AND?: conversationMembersScalarWhereWithAggregatesInput | conversationMembersScalarWhereWithAggregatesInput[]
    OR?: conversationMembersScalarWhereWithAggregatesInput[]
    NOT?: conversationMembersScalarWhereWithAggregatesInput | conversationMembersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"conversationMembers"> | string
    memberId?: StringWithAggregatesFilter<"conversationMembers"> | string
    conversationId?: StringWithAggregatesFilter<"conversationMembers"> | string
    lastSeenMessageId?: StringNullableWithAggregatesFilter<"conversationMembers"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"conversationMembers"> | Date | string
  }

  export type messagesWhereInput = {
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    id?: StringFilter<"messages"> | string
    senderId?: StringFilter<"messages"> | string
    conversationId?: StringFilter<"messages"> | string
    type?: StringFilter<"messages"> | string
    content?: JsonFilter<"messages">
    createdAt?: DateTimeFilter<"messages"> | Date | string
    sender?: XOR<UsersScalarRelationFilter, usersWhereInput>
    conversation?: XOR<ConversationsScalarRelationFilter, conversationsWhereInput>
    conversationMembers?: ConversationMembersListRelationFilter
    conversations?: ConversationsListRelationFilter
  }

  export type messagesOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    conversationId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    sender?: usersOrderByWithRelationInput
    conversation?: conversationsOrderByWithRelationInput
    conversationMembers?: conversationMembersOrderByRelationAggregateInput
    conversations?: conversationsOrderByRelationAggregateInput
    _relevance?: messagesOrderByRelevanceInput
  }

  export type messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    senderId?: StringFilter<"messages"> | string
    conversationId?: StringFilter<"messages"> | string
    type?: StringFilter<"messages"> | string
    content?: JsonFilter<"messages">
    createdAt?: DateTimeFilter<"messages"> | Date | string
    sender?: XOR<UsersScalarRelationFilter, usersWhereInput>
    conversation?: XOR<ConversationsScalarRelationFilter, conversationsWhereInput>
    conversationMembers?: ConversationMembersListRelationFilter
    conversations?: ConversationsListRelationFilter
  }, "id">

  export type messagesOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    conversationId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: messagesCountOrderByAggregateInput
    _max?: messagesMaxOrderByAggregateInput
    _min?: messagesMinOrderByAggregateInput
  }

  export type messagesScalarWhereWithAggregatesInput = {
    AND?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    OR?: messagesScalarWhereWithAggregatesInput[]
    NOT?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"messages"> | string
    senderId?: StringWithAggregatesFilter<"messages"> | string
    conversationId?: StringWithAggregatesFilter<"messages"> | string
    type?: StringWithAggregatesFilter<"messages"> | string
    content?: JsonWithAggregatesFilter<"messages">
    createdAt?: DateTimeWithAggregatesFilter<"messages"> | Date | string
  }

  export type usersCreateInput = {
    id?: string
    imageUrl?: string | null
    username: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sent?: requestsCreateNestedManyWithoutSenderInput
    received?: requestsCreateNestedManyWithoutReceiverInput
    friends1?: friendsCreateNestedManyWithoutUser1Input
    friends2?: friendsCreateNestedManyWithoutUser2Input
    conversationMembers?: conversationMembersCreateNestedManyWithoutMemberInput
    messages?: messagesCreateNestedManyWithoutSenderInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    imageUrl?: string | null
    username: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sent?: requestsUncheckedCreateNestedManyWithoutSenderInput
    received?: requestsUncheckedCreateNestedManyWithoutReceiverInput
    friends1?: friendsUncheckedCreateNestedManyWithoutUser1Input
    friends2?: friendsUncheckedCreateNestedManyWithoutUser2Input
    conversationMembers?: conversationMembersUncheckedCreateNestedManyWithoutMemberInput
    messages?: messagesUncheckedCreateNestedManyWithoutSenderInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: requestsUpdateManyWithoutSenderNestedInput
    received?: requestsUpdateManyWithoutReceiverNestedInput
    friends1?: friendsUpdateManyWithoutUser1NestedInput
    friends2?: friendsUpdateManyWithoutUser2NestedInput
    conversationMembers?: conversationMembersUpdateManyWithoutMemberNestedInput
    messages?: messagesUpdateManyWithoutSenderNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: requestsUncheckedUpdateManyWithoutSenderNestedInput
    received?: requestsUncheckedUpdateManyWithoutReceiverNestedInput
    friends1?: friendsUncheckedUpdateManyWithoutUser1NestedInput
    friends2?: friendsUncheckedUpdateManyWithoutUser2NestedInput
    conversationMembers?: conversationMembersUncheckedUpdateManyWithoutMemberNestedInput
    messages?: messagesUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    imageUrl?: string | null
    username: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type requestsCreateInput = {
    id?: string
    createdAt?: Date | string
    sender: usersCreateNestedOneWithoutSentInput
    receiver: usersCreateNestedOneWithoutReceivedInput
  }

  export type requestsUncheckedCreateInput = {
    id?: string
    senderId: string
    receiverId: string
    createdAt?: Date | string
  }

  export type requestsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: usersUpdateOneRequiredWithoutSentNestedInput
    receiver?: usersUpdateOneRequiredWithoutReceivedNestedInput
  }

  export type requestsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type requestsCreateManyInput = {
    id?: string
    senderId: string
    receiverId: string
    createdAt?: Date | string
  }

  export type requestsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type requestsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendsCreateInput = {
    id?: string
    createdAt?: Date | string
    user1: usersCreateNestedOneWithoutFriends1Input
    user2: usersCreateNestedOneWithoutFriends2Input
    conversation: conversationsCreateNestedOneWithoutFriendsInput
  }

  export type friendsUncheckedCreateInput = {
    id?: string
    user1Id: string
    user2Id: string
    conversationId: string
    createdAt?: Date | string
  }

  export type friendsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: usersUpdateOneRequiredWithoutFriends1NestedInput
    user2?: usersUpdateOneRequiredWithoutFriends2NestedInput
    conversation?: conversationsUpdateOneRequiredWithoutFriendsNestedInput
  }

  export type friendsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendsCreateManyInput = {
    id?: string
    user1Id: string
    user2Id: string
    conversationId: string
    createdAt?: Date | string
  }

  export type friendsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type conversationsCreateInput = {
    id?: string
    name?: string | null
    isGroup: boolean
    createdAt?: Date | string
    friends?: friendsCreateNestedManyWithoutConversationInput
    conversationMembers?: conversationMembersCreateNestedManyWithoutConversationInput
    messages?: messagesCreateNestedManyWithoutConversationInput
    lastMessage?: messagesCreateNestedOneWithoutConversationsInput
  }

  export type conversationsUncheckedCreateInput = {
    id?: string
    name?: string | null
    isGroup: boolean
    lastMessageId?: string | null
    createdAt?: Date | string
    friends?: friendsUncheckedCreateNestedManyWithoutConversationInput
    conversationMembers?: conversationMembersUncheckedCreateNestedManyWithoutConversationInput
    messages?: messagesUncheckedCreateNestedManyWithoutConversationInput
  }

  export type conversationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: friendsUpdateManyWithoutConversationNestedInput
    conversationMembers?: conversationMembersUpdateManyWithoutConversationNestedInput
    messages?: messagesUpdateManyWithoutConversationNestedInput
    lastMessage?: messagesUpdateOneWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: friendsUncheckedUpdateManyWithoutConversationNestedInput
    conversationMembers?: conversationMembersUncheckedUpdateManyWithoutConversationNestedInput
    messages?: messagesUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type conversationsCreateManyInput = {
    id?: string
    name?: string | null
    isGroup: boolean
    lastMessageId?: string | null
    createdAt?: Date | string
  }

  export type conversationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type conversationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type conversationMembersCreateInput = {
    id?: string
    createdAt?: Date | string
    member: usersCreateNestedOneWithoutConversationMembersInput
    conversation: conversationsCreateNestedOneWithoutConversationMembersInput
    lastSeenMessage?: messagesCreateNestedOneWithoutConversationMembersInput
  }

  export type conversationMembersUncheckedCreateInput = {
    id?: string
    memberId: string
    conversationId: string
    lastSeenMessageId?: string | null
    createdAt?: Date | string
  }

  export type conversationMembersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: usersUpdateOneRequiredWithoutConversationMembersNestedInput
    conversation?: conversationsUpdateOneRequiredWithoutConversationMembersNestedInput
    lastSeenMessage?: messagesUpdateOneWithoutConversationMembersNestedInput
  }

  export type conversationMembersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    lastSeenMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type conversationMembersCreateManyInput = {
    id?: string
    memberId: string
    conversationId: string
    lastSeenMessageId?: string | null
    createdAt?: Date | string
  }

  export type conversationMembersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type conversationMembersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    lastSeenMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesCreateInput = {
    id?: string
    type: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    sender: usersCreateNestedOneWithoutMessagesInput
    conversation: conversationsCreateNestedOneWithoutMessagesInput
    conversationMembers?: conversationMembersCreateNestedManyWithoutLastSeenMessageInput
    conversations?: conversationsCreateNestedManyWithoutLastMessageInput
  }

  export type messagesUncheckedCreateInput = {
    id?: string
    senderId: string
    conversationId: string
    type: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    conversationMembers?: conversationMembersUncheckedCreateNestedManyWithoutLastSeenMessageInput
    conversations?: conversationsUncheckedCreateNestedManyWithoutLastMessageInput
  }

  export type messagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: usersUpdateOneRequiredWithoutMessagesNestedInput
    conversation?: conversationsUpdateOneRequiredWithoutMessagesNestedInput
    conversationMembers?: conversationMembersUpdateManyWithoutLastSeenMessageNestedInput
    conversations?: conversationsUpdateManyWithoutLastMessageNestedInput
  }

  export type messagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationMembers?: conversationMembersUncheckedUpdateManyWithoutLastSeenMessageNestedInput
    conversations?: conversationsUncheckedUpdateManyWithoutLastMessageNestedInput
  }

  export type messagesCreateManyInput = {
    id?: string
    senderId: string
    conversationId: string
    type: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type messagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RequestsListRelationFilter = {
    every?: requestsWhereInput
    some?: requestsWhereInput
    none?: requestsWhereInput
  }

  export type FriendsListRelationFilter = {
    every?: friendsWhereInput
    some?: friendsWhereInput
    none?: friendsWhereInput
  }

  export type ConversationMembersListRelationFilter = {
    every?: conversationMembersWhereInput
    some?: conversationMembersWhereInput
    none?: conversationMembersWhereInput
  }

  export type MessagesListRelationFilter = {
    every?: messagesWhereInput
    some?: messagesWhereInput
    none?: messagesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type requestsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type friendsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type conversationMembersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type messagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type requestsOrderByRelevanceInput = {
    fields: requestsOrderByRelevanceFieldEnum | requestsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type requestsCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
  }

  export type requestsMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
  }

  export type requestsMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
  }

  export type ConversationsScalarRelationFilter = {
    is?: conversationsWhereInput
    isNot?: conversationsWhereInput
  }

  export type friendsOrderByRelevanceInput = {
    fields: friendsOrderByRelevanceFieldEnum | friendsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type friendsCountOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
  }

  export type friendsMaxOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
  }

  export type friendsMinOrderByAggregateInput = {
    id?: SortOrder
    user1Id?: SortOrder
    user2Id?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MessagesNullableScalarRelationFilter = {
    is?: messagesWhereInput | null
    isNot?: messagesWhereInput | null
  }

  export type conversationsOrderByRelevanceInput = {
    fields: conversationsOrderByRelevanceFieldEnum | conversationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type conversationsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isGroup?: SortOrder
    lastMessageId?: SortOrder
    createdAt?: SortOrder
  }

  export type conversationsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isGroup?: SortOrder
    lastMessageId?: SortOrder
    createdAt?: SortOrder
  }

  export type conversationsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isGroup?: SortOrder
    lastMessageId?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type conversationMembersOrderByRelevanceInput = {
    fields: conversationMembersOrderByRelevanceFieldEnum | conversationMembersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type conversationMembersCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    conversationId?: SortOrder
    lastSeenMessageId?: SortOrder
    createdAt?: SortOrder
  }

  export type conversationMembersMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    conversationId?: SortOrder
    lastSeenMessageId?: SortOrder
    createdAt?: SortOrder
  }

  export type conversationMembersMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    conversationId?: SortOrder
    lastSeenMessageId?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ConversationsListRelationFilter = {
    every?: conversationsWhereInput
    some?: conversationsWhereInput
    none?: conversationsWhereInput
  }

  export type conversationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type messagesOrderByRelevanceInput = {
    fields: messagesOrderByRelevanceFieldEnum | messagesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type messagesCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    conversationId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    conversationId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type messagesMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    conversationId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type requestsCreateNestedManyWithoutSenderInput = {
    create?: XOR<requestsCreateWithoutSenderInput, requestsUncheckedCreateWithoutSenderInput> | requestsCreateWithoutSenderInput[] | requestsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: requestsCreateOrConnectWithoutSenderInput | requestsCreateOrConnectWithoutSenderInput[]
    createMany?: requestsCreateManySenderInputEnvelope
    connect?: requestsWhereUniqueInput | requestsWhereUniqueInput[]
  }

  export type requestsCreateNestedManyWithoutReceiverInput = {
    create?: XOR<requestsCreateWithoutReceiverInput, requestsUncheckedCreateWithoutReceiverInput> | requestsCreateWithoutReceiverInput[] | requestsUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: requestsCreateOrConnectWithoutReceiverInput | requestsCreateOrConnectWithoutReceiverInput[]
    createMany?: requestsCreateManyReceiverInputEnvelope
    connect?: requestsWhereUniqueInput | requestsWhereUniqueInput[]
  }

  export type friendsCreateNestedManyWithoutUser1Input = {
    create?: XOR<friendsCreateWithoutUser1Input, friendsUncheckedCreateWithoutUser1Input> | friendsCreateWithoutUser1Input[] | friendsUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: friendsCreateOrConnectWithoutUser1Input | friendsCreateOrConnectWithoutUser1Input[]
    createMany?: friendsCreateManyUser1InputEnvelope
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
  }

  export type friendsCreateNestedManyWithoutUser2Input = {
    create?: XOR<friendsCreateWithoutUser2Input, friendsUncheckedCreateWithoutUser2Input> | friendsCreateWithoutUser2Input[] | friendsUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: friendsCreateOrConnectWithoutUser2Input | friendsCreateOrConnectWithoutUser2Input[]
    createMany?: friendsCreateManyUser2InputEnvelope
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
  }

  export type conversationMembersCreateNestedManyWithoutMemberInput = {
    create?: XOR<conversationMembersCreateWithoutMemberInput, conversationMembersUncheckedCreateWithoutMemberInput> | conversationMembersCreateWithoutMemberInput[] | conversationMembersUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: conversationMembersCreateOrConnectWithoutMemberInput | conversationMembersCreateOrConnectWithoutMemberInput[]
    createMany?: conversationMembersCreateManyMemberInputEnvelope
    connect?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
  }

  export type messagesCreateNestedManyWithoutSenderInput = {
    create?: XOR<messagesCreateWithoutSenderInput, messagesUncheckedCreateWithoutSenderInput> | messagesCreateWithoutSenderInput[] | messagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutSenderInput | messagesCreateOrConnectWithoutSenderInput[]
    createMany?: messagesCreateManySenderInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type requestsUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<requestsCreateWithoutSenderInput, requestsUncheckedCreateWithoutSenderInput> | requestsCreateWithoutSenderInput[] | requestsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: requestsCreateOrConnectWithoutSenderInput | requestsCreateOrConnectWithoutSenderInput[]
    createMany?: requestsCreateManySenderInputEnvelope
    connect?: requestsWhereUniqueInput | requestsWhereUniqueInput[]
  }

  export type requestsUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<requestsCreateWithoutReceiverInput, requestsUncheckedCreateWithoutReceiverInput> | requestsCreateWithoutReceiverInput[] | requestsUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: requestsCreateOrConnectWithoutReceiverInput | requestsCreateOrConnectWithoutReceiverInput[]
    createMany?: requestsCreateManyReceiverInputEnvelope
    connect?: requestsWhereUniqueInput | requestsWhereUniqueInput[]
  }

  export type friendsUncheckedCreateNestedManyWithoutUser1Input = {
    create?: XOR<friendsCreateWithoutUser1Input, friendsUncheckedCreateWithoutUser1Input> | friendsCreateWithoutUser1Input[] | friendsUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: friendsCreateOrConnectWithoutUser1Input | friendsCreateOrConnectWithoutUser1Input[]
    createMany?: friendsCreateManyUser1InputEnvelope
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
  }

  export type friendsUncheckedCreateNestedManyWithoutUser2Input = {
    create?: XOR<friendsCreateWithoutUser2Input, friendsUncheckedCreateWithoutUser2Input> | friendsCreateWithoutUser2Input[] | friendsUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: friendsCreateOrConnectWithoutUser2Input | friendsCreateOrConnectWithoutUser2Input[]
    createMany?: friendsCreateManyUser2InputEnvelope
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
  }

  export type conversationMembersUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<conversationMembersCreateWithoutMemberInput, conversationMembersUncheckedCreateWithoutMemberInput> | conversationMembersCreateWithoutMemberInput[] | conversationMembersUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: conversationMembersCreateOrConnectWithoutMemberInput | conversationMembersCreateOrConnectWithoutMemberInput[]
    createMany?: conversationMembersCreateManyMemberInputEnvelope
    connect?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<messagesCreateWithoutSenderInput, messagesUncheckedCreateWithoutSenderInput> | messagesCreateWithoutSenderInput[] | messagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutSenderInput | messagesCreateOrConnectWithoutSenderInput[]
    createMany?: messagesCreateManySenderInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type requestsUpdateManyWithoutSenderNestedInput = {
    create?: XOR<requestsCreateWithoutSenderInput, requestsUncheckedCreateWithoutSenderInput> | requestsCreateWithoutSenderInput[] | requestsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: requestsCreateOrConnectWithoutSenderInput | requestsCreateOrConnectWithoutSenderInput[]
    upsert?: requestsUpsertWithWhereUniqueWithoutSenderInput | requestsUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: requestsCreateManySenderInputEnvelope
    set?: requestsWhereUniqueInput | requestsWhereUniqueInput[]
    disconnect?: requestsWhereUniqueInput | requestsWhereUniqueInput[]
    delete?: requestsWhereUniqueInput | requestsWhereUniqueInput[]
    connect?: requestsWhereUniqueInput | requestsWhereUniqueInput[]
    update?: requestsUpdateWithWhereUniqueWithoutSenderInput | requestsUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: requestsUpdateManyWithWhereWithoutSenderInput | requestsUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: requestsScalarWhereInput | requestsScalarWhereInput[]
  }

  export type requestsUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<requestsCreateWithoutReceiverInput, requestsUncheckedCreateWithoutReceiverInput> | requestsCreateWithoutReceiverInput[] | requestsUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: requestsCreateOrConnectWithoutReceiverInput | requestsCreateOrConnectWithoutReceiverInput[]
    upsert?: requestsUpsertWithWhereUniqueWithoutReceiverInput | requestsUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: requestsCreateManyReceiverInputEnvelope
    set?: requestsWhereUniqueInput | requestsWhereUniqueInput[]
    disconnect?: requestsWhereUniqueInput | requestsWhereUniqueInput[]
    delete?: requestsWhereUniqueInput | requestsWhereUniqueInput[]
    connect?: requestsWhereUniqueInput | requestsWhereUniqueInput[]
    update?: requestsUpdateWithWhereUniqueWithoutReceiverInput | requestsUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: requestsUpdateManyWithWhereWithoutReceiverInput | requestsUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: requestsScalarWhereInput | requestsScalarWhereInput[]
  }

  export type friendsUpdateManyWithoutUser1NestedInput = {
    create?: XOR<friendsCreateWithoutUser1Input, friendsUncheckedCreateWithoutUser1Input> | friendsCreateWithoutUser1Input[] | friendsUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: friendsCreateOrConnectWithoutUser1Input | friendsCreateOrConnectWithoutUser1Input[]
    upsert?: friendsUpsertWithWhereUniqueWithoutUser1Input | friendsUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: friendsCreateManyUser1InputEnvelope
    set?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    disconnect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    delete?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    update?: friendsUpdateWithWhereUniqueWithoutUser1Input | friendsUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: friendsUpdateManyWithWhereWithoutUser1Input | friendsUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: friendsScalarWhereInput | friendsScalarWhereInput[]
  }

  export type friendsUpdateManyWithoutUser2NestedInput = {
    create?: XOR<friendsCreateWithoutUser2Input, friendsUncheckedCreateWithoutUser2Input> | friendsCreateWithoutUser2Input[] | friendsUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: friendsCreateOrConnectWithoutUser2Input | friendsCreateOrConnectWithoutUser2Input[]
    upsert?: friendsUpsertWithWhereUniqueWithoutUser2Input | friendsUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: friendsCreateManyUser2InputEnvelope
    set?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    disconnect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    delete?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    update?: friendsUpdateWithWhereUniqueWithoutUser2Input | friendsUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: friendsUpdateManyWithWhereWithoutUser2Input | friendsUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: friendsScalarWhereInput | friendsScalarWhereInput[]
  }

  export type conversationMembersUpdateManyWithoutMemberNestedInput = {
    create?: XOR<conversationMembersCreateWithoutMemberInput, conversationMembersUncheckedCreateWithoutMemberInput> | conversationMembersCreateWithoutMemberInput[] | conversationMembersUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: conversationMembersCreateOrConnectWithoutMemberInput | conversationMembersCreateOrConnectWithoutMemberInput[]
    upsert?: conversationMembersUpsertWithWhereUniqueWithoutMemberInput | conversationMembersUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: conversationMembersCreateManyMemberInputEnvelope
    set?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
    disconnect?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
    delete?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
    connect?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
    update?: conversationMembersUpdateWithWhereUniqueWithoutMemberInput | conversationMembersUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: conversationMembersUpdateManyWithWhereWithoutMemberInput | conversationMembersUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: conversationMembersScalarWhereInput | conversationMembersScalarWhereInput[]
  }

  export type messagesUpdateManyWithoutSenderNestedInput = {
    create?: XOR<messagesCreateWithoutSenderInput, messagesUncheckedCreateWithoutSenderInput> | messagesCreateWithoutSenderInput[] | messagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutSenderInput | messagesCreateOrConnectWithoutSenderInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutSenderInput | messagesUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: messagesCreateManySenderInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutSenderInput | messagesUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutSenderInput | messagesUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type requestsUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<requestsCreateWithoutSenderInput, requestsUncheckedCreateWithoutSenderInput> | requestsCreateWithoutSenderInput[] | requestsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: requestsCreateOrConnectWithoutSenderInput | requestsCreateOrConnectWithoutSenderInput[]
    upsert?: requestsUpsertWithWhereUniqueWithoutSenderInput | requestsUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: requestsCreateManySenderInputEnvelope
    set?: requestsWhereUniqueInput | requestsWhereUniqueInput[]
    disconnect?: requestsWhereUniqueInput | requestsWhereUniqueInput[]
    delete?: requestsWhereUniqueInput | requestsWhereUniqueInput[]
    connect?: requestsWhereUniqueInput | requestsWhereUniqueInput[]
    update?: requestsUpdateWithWhereUniqueWithoutSenderInput | requestsUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: requestsUpdateManyWithWhereWithoutSenderInput | requestsUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: requestsScalarWhereInput | requestsScalarWhereInput[]
  }

  export type requestsUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<requestsCreateWithoutReceiverInput, requestsUncheckedCreateWithoutReceiverInput> | requestsCreateWithoutReceiverInput[] | requestsUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: requestsCreateOrConnectWithoutReceiverInput | requestsCreateOrConnectWithoutReceiverInput[]
    upsert?: requestsUpsertWithWhereUniqueWithoutReceiverInput | requestsUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: requestsCreateManyReceiverInputEnvelope
    set?: requestsWhereUniqueInput | requestsWhereUniqueInput[]
    disconnect?: requestsWhereUniqueInput | requestsWhereUniqueInput[]
    delete?: requestsWhereUniqueInput | requestsWhereUniqueInput[]
    connect?: requestsWhereUniqueInput | requestsWhereUniqueInput[]
    update?: requestsUpdateWithWhereUniqueWithoutReceiverInput | requestsUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: requestsUpdateManyWithWhereWithoutReceiverInput | requestsUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: requestsScalarWhereInput | requestsScalarWhereInput[]
  }

  export type friendsUncheckedUpdateManyWithoutUser1NestedInput = {
    create?: XOR<friendsCreateWithoutUser1Input, friendsUncheckedCreateWithoutUser1Input> | friendsCreateWithoutUser1Input[] | friendsUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: friendsCreateOrConnectWithoutUser1Input | friendsCreateOrConnectWithoutUser1Input[]
    upsert?: friendsUpsertWithWhereUniqueWithoutUser1Input | friendsUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: friendsCreateManyUser1InputEnvelope
    set?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    disconnect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    delete?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    update?: friendsUpdateWithWhereUniqueWithoutUser1Input | friendsUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: friendsUpdateManyWithWhereWithoutUser1Input | friendsUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: friendsScalarWhereInput | friendsScalarWhereInput[]
  }

  export type friendsUncheckedUpdateManyWithoutUser2NestedInput = {
    create?: XOR<friendsCreateWithoutUser2Input, friendsUncheckedCreateWithoutUser2Input> | friendsCreateWithoutUser2Input[] | friendsUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: friendsCreateOrConnectWithoutUser2Input | friendsCreateOrConnectWithoutUser2Input[]
    upsert?: friendsUpsertWithWhereUniqueWithoutUser2Input | friendsUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: friendsCreateManyUser2InputEnvelope
    set?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    disconnect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    delete?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    update?: friendsUpdateWithWhereUniqueWithoutUser2Input | friendsUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: friendsUpdateManyWithWhereWithoutUser2Input | friendsUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: friendsScalarWhereInput | friendsScalarWhereInput[]
  }

  export type conversationMembersUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<conversationMembersCreateWithoutMemberInput, conversationMembersUncheckedCreateWithoutMemberInput> | conversationMembersCreateWithoutMemberInput[] | conversationMembersUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: conversationMembersCreateOrConnectWithoutMemberInput | conversationMembersCreateOrConnectWithoutMemberInput[]
    upsert?: conversationMembersUpsertWithWhereUniqueWithoutMemberInput | conversationMembersUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: conversationMembersCreateManyMemberInputEnvelope
    set?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
    disconnect?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
    delete?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
    connect?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
    update?: conversationMembersUpdateWithWhereUniqueWithoutMemberInput | conversationMembersUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: conversationMembersUpdateManyWithWhereWithoutMemberInput | conversationMembersUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: conversationMembersScalarWhereInput | conversationMembersScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<messagesCreateWithoutSenderInput, messagesUncheckedCreateWithoutSenderInput> | messagesCreateWithoutSenderInput[] | messagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutSenderInput | messagesCreateOrConnectWithoutSenderInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutSenderInput | messagesUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: messagesCreateManySenderInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutSenderInput | messagesUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutSenderInput | messagesUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutSentInput = {
    create?: XOR<usersCreateWithoutSentInput, usersUncheckedCreateWithoutSentInput>
    connectOrCreate?: usersCreateOrConnectWithoutSentInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutReceivedInput = {
    create?: XOR<usersCreateWithoutReceivedInput, usersUncheckedCreateWithoutReceivedInput>
    connectOrCreate?: usersCreateOrConnectWithoutReceivedInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutSentNestedInput = {
    create?: XOR<usersCreateWithoutSentInput, usersUncheckedCreateWithoutSentInput>
    connectOrCreate?: usersCreateOrConnectWithoutSentInput
    upsert?: usersUpsertWithoutSentInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSentInput, usersUpdateWithoutSentInput>, usersUncheckedUpdateWithoutSentInput>
  }

  export type usersUpdateOneRequiredWithoutReceivedNestedInput = {
    create?: XOR<usersCreateWithoutReceivedInput, usersUncheckedCreateWithoutReceivedInput>
    connectOrCreate?: usersCreateOrConnectWithoutReceivedInput
    upsert?: usersUpsertWithoutReceivedInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReceivedInput, usersUpdateWithoutReceivedInput>, usersUncheckedUpdateWithoutReceivedInput>
  }

  export type usersCreateNestedOneWithoutFriends1Input = {
    create?: XOR<usersCreateWithoutFriends1Input, usersUncheckedCreateWithoutFriends1Input>
    connectOrCreate?: usersCreateOrConnectWithoutFriends1Input
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutFriends2Input = {
    create?: XOR<usersCreateWithoutFriends2Input, usersUncheckedCreateWithoutFriends2Input>
    connectOrCreate?: usersCreateOrConnectWithoutFriends2Input
    connect?: usersWhereUniqueInput
  }

  export type conversationsCreateNestedOneWithoutFriendsInput = {
    create?: XOR<conversationsCreateWithoutFriendsInput, conversationsUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: conversationsCreateOrConnectWithoutFriendsInput
    connect?: conversationsWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutFriends1NestedInput = {
    create?: XOR<usersCreateWithoutFriends1Input, usersUncheckedCreateWithoutFriends1Input>
    connectOrCreate?: usersCreateOrConnectWithoutFriends1Input
    upsert?: usersUpsertWithoutFriends1Input
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFriends1Input, usersUpdateWithoutFriends1Input>, usersUncheckedUpdateWithoutFriends1Input>
  }

  export type usersUpdateOneRequiredWithoutFriends2NestedInput = {
    create?: XOR<usersCreateWithoutFriends2Input, usersUncheckedCreateWithoutFriends2Input>
    connectOrCreate?: usersCreateOrConnectWithoutFriends2Input
    upsert?: usersUpsertWithoutFriends2Input
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFriends2Input, usersUpdateWithoutFriends2Input>, usersUncheckedUpdateWithoutFriends2Input>
  }

  export type conversationsUpdateOneRequiredWithoutFriendsNestedInput = {
    create?: XOR<conversationsCreateWithoutFriendsInput, conversationsUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: conversationsCreateOrConnectWithoutFriendsInput
    upsert?: conversationsUpsertWithoutFriendsInput
    connect?: conversationsWhereUniqueInput
    update?: XOR<XOR<conversationsUpdateToOneWithWhereWithoutFriendsInput, conversationsUpdateWithoutFriendsInput>, conversationsUncheckedUpdateWithoutFriendsInput>
  }

  export type friendsCreateNestedManyWithoutConversationInput = {
    create?: XOR<friendsCreateWithoutConversationInput, friendsUncheckedCreateWithoutConversationInput> | friendsCreateWithoutConversationInput[] | friendsUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutConversationInput | friendsCreateOrConnectWithoutConversationInput[]
    createMany?: friendsCreateManyConversationInputEnvelope
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
  }

  export type conversationMembersCreateNestedManyWithoutConversationInput = {
    create?: XOR<conversationMembersCreateWithoutConversationInput, conversationMembersUncheckedCreateWithoutConversationInput> | conversationMembersCreateWithoutConversationInput[] | conversationMembersUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: conversationMembersCreateOrConnectWithoutConversationInput | conversationMembersCreateOrConnectWithoutConversationInput[]
    createMany?: conversationMembersCreateManyConversationInputEnvelope
    connect?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
  }

  export type messagesCreateNestedManyWithoutConversationInput = {
    create?: XOR<messagesCreateWithoutConversationInput, messagesUncheckedCreateWithoutConversationInput> | messagesCreateWithoutConversationInput[] | messagesUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationInput | messagesCreateOrConnectWithoutConversationInput[]
    createMany?: messagesCreateManyConversationInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type messagesCreateNestedOneWithoutConversationsInput = {
    create?: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: messagesCreateOrConnectWithoutConversationsInput
    connect?: messagesWhereUniqueInput
  }

  export type friendsUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<friendsCreateWithoutConversationInput, friendsUncheckedCreateWithoutConversationInput> | friendsCreateWithoutConversationInput[] | friendsUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutConversationInput | friendsCreateOrConnectWithoutConversationInput[]
    createMany?: friendsCreateManyConversationInputEnvelope
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
  }

  export type conversationMembersUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<conversationMembersCreateWithoutConversationInput, conversationMembersUncheckedCreateWithoutConversationInput> | conversationMembersCreateWithoutConversationInput[] | conversationMembersUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: conversationMembersCreateOrConnectWithoutConversationInput | conversationMembersCreateOrConnectWithoutConversationInput[]
    createMany?: conversationMembersCreateManyConversationInputEnvelope
    connect?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<messagesCreateWithoutConversationInput, messagesUncheckedCreateWithoutConversationInput> | messagesCreateWithoutConversationInput[] | messagesUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationInput | messagesCreateOrConnectWithoutConversationInput[]
    createMany?: messagesCreateManyConversationInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type friendsUpdateManyWithoutConversationNestedInput = {
    create?: XOR<friendsCreateWithoutConversationInput, friendsUncheckedCreateWithoutConversationInput> | friendsCreateWithoutConversationInput[] | friendsUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutConversationInput | friendsCreateOrConnectWithoutConversationInput[]
    upsert?: friendsUpsertWithWhereUniqueWithoutConversationInput | friendsUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: friendsCreateManyConversationInputEnvelope
    set?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    disconnect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    delete?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    update?: friendsUpdateWithWhereUniqueWithoutConversationInput | friendsUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: friendsUpdateManyWithWhereWithoutConversationInput | friendsUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: friendsScalarWhereInput | friendsScalarWhereInput[]
  }

  export type conversationMembersUpdateManyWithoutConversationNestedInput = {
    create?: XOR<conversationMembersCreateWithoutConversationInput, conversationMembersUncheckedCreateWithoutConversationInput> | conversationMembersCreateWithoutConversationInput[] | conversationMembersUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: conversationMembersCreateOrConnectWithoutConversationInput | conversationMembersCreateOrConnectWithoutConversationInput[]
    upsert?: conversationMembersUpsertWithWhereUniqueWithoutConversationInput | conversationMembersUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: conversationMembersCreateManyConversationInputEnvelope
    set?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
    disconnect?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
    delete?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
    connect?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
    update?: conversationMembersUpdateWithWhereUniqueWithoutConversationInput | conversationMembersUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: conversationMembersUpdateManyWithWhereWithoutConversationInput | conversationMembersUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: conversationMembersScalarWhereInput | conversationMembersScalarWhereInput[]
  }

  export type messagesUpdateManyWithoutConversationNestedInput = {
    create?: XOR<messagesCreateWithoutConversationInput, messagesUncheckedCreateWithoutConversationInput> | messagesCreateWithoutConversationInput[] | messagesUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationInput | messagesCreateOrConnectWithoutConversationInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutConversationInput | messagesUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: messagesCreateManyConversationInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutConversationInput | messagesUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutConversationInput | messagesUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type messagesUpdateOneWithoutConversationsNestedInput = {
    create?: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: messagesCreateOrConnectWithoutConversationsInput
    upsert?: messagesUpsertWithoutConversationsInput
    disconnect?: messagesWhereInput | boolean
    delete?: messagesWhereInput | boolean
    connect?: messagesWhereUniqueInput
    update?: XOR<XOR<messagesUpdateToOneWithWhereWithoutConversationsInput, messagesUpdateWithoutConversationsInput>, messagesUncheckedUpdateWithoutConversationsInput>
  }

  export type friendsUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<friendsCreateWithoutConversationInput, friendsUncheckedCreateWithoutConversationInput> | friendsCreateWithoutConversationInput[] | friendsUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutConversationInput | friendsCreateOrConnectWithoutConversationInput[]
    upsert?: friendsUpsertWithWhereUniqueWithoutConversationInput | friendsUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: friendsCreateManyConversationInputEnvelope
    set?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    disconnect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    delete?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    update?: friendsUpdateWithWhereUniqueWithoutConversationInput | friendsUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: friendsUpdateManyWithWhereWithoutConversationInput | friendsUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: friendsScalarWhereInput | friendsScalarWhereInput[]
  }

  export type conversationMembersUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<conversationMembersCreateWithoutConversationInput, conversationMembersUncheckedCreateWithoutConversationInput> | conversationMembersCreateWithoutConversationInput[] | conversationMembersUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: conversationMembersCreateOrConnectWithoutConversationInput | conversationMembersCreateOrConnectWithoutConversationInput[]
    upsert?: conversationMembersUpsertWithWhereUniqueWithoutConversationInput | conversationMembersUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: conversationMembersCreateManyConversationInputEnvelope
    set?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
    disconnect?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
    delete?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
    connect?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
    update?: conversationMembersUpdateWithWhereUniqueWithoutConversationInput | conversationMembersUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: conversationMembersUpdateManyWithWhereWithoutConversationInput | conversationMembersUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: conversationMembersScalarWhereInput | conversationMembersScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<messagesCreateWithoutConversationInput, messagesUncheckedCreateWithoutConversationInput> | messagesCreateWithoutConversationInput[] | messagesUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationInput | messagesCreateOrConnectWithoutConversationInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutConversationInput | messagesUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: messagesCreateManyConversationInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutConversationInput | messagesUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutConversationInput | messagesUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutConversationMembersInput = {
    create?: XOR<usersCreateWithoutConversationMembersInput, usersUncheckedCreateWithoutConversationMembersInput>
    connectOrCreate?: usersCreateOrConnectWithoutConversationMembersInput
    connect?: usersWhereUniqueInput
  }

  export type conversationsCreateNestedOneWithoutConversationMembersInput = {
    create?: XOR<conversationsCreateWithoutConversationMembersInput, conversationsUncheckedCreateWithoutConversationMembersInput>
    connectOrCreate?: conversationsCreateOrConnectWithoutConversationMembersInput
    connect?: conversationsWhereUniqueInput
  }

  export type messagesCreateNestedOneWithoutConversationMembersInput = {
    create?: XOR<messagesCreateWithoutConversationMembersInput, messagesUncheckedCreateWithoutConversationMembersInput>
    connectOrCreate?: messagesCreateOrConnectWithoutConversationMembersInput
    connect?: messagesWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutConversationMembersNestedInput = {
    create?: XOR<usersCreateWithoutConversationMembersInput, usersUncheckedCreateWithoutConversationMembersInput>
    connectOrCreate?: usersCreateOrConnectWithoutConversationMembersInput
    upsert?: usersUpsertWithoutConversationMembersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutConversationMembersInput, usersUpdateWithoutConversationMembersInput>, usersUncheckedUpdateWithoutConversationMembersInput>
  }

  export type conversationsUpdateOneRequiredWithoutConversationMembersNestedInput = {
    create?: XOR<conversationsCreateWithoutConversationMembersInput, conversationsUncheckedCreateWithoutConversationMembersInput>
    connectOrCreate?: conversationsCreateOrConnectWithoutConversationMembersInput
    upsert?: conversationsUpsertWithoutConversationMembersInput
    connect?: conversationsWhereUniqueInput
    update?: XOR<XOR<conversationsUpdateToOneWithWhereWithoutConversationMembersInput, conversationsUpdateWithoutConversationMembersInput>, conversationsUncheckedUpdateWithoutConversationMembersInput>
  }

  export type messagesUpdateOneWithoutConversationMembersNestedInput = {
    create?: XOR<messagesCreateWithoutConversationMembersInput, messagesUncheckedCreateWithoutConversationMembersInput>
    connectOrCreate?: messagesCreateOrConnectWithoutConversationMembersInput
    upsert?: messagesUpsertWithoutConversationMembersInput
    disconnect?: messagesWhereInput | boolean
    delete?: messagesWhereInput | boolean
    connect?: messagesWhereUniqueInput
    update?: XOR<XOR<messagesUpdateToOneWithWhereWithoutConversationMembersInput, messagesUpdateWithoutConversationMembersInput>, messagesUncheckedUpdateWithoutConversationMembersInput>
  }

  export type usersCreateNestedOneWithoutMessagesInput = {
    create?: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutMessagesInput
    connect?: usersWhereUniqueInput
  }

  export type conversationsCreateNestedOneWithoutMessagesInput = {
    create?: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: conversationsCreateOrConnectWithoutMessagesInput
    connect?: conversationsWhereUniqueInput
  }

  export type conversationMembersCreateNestedManyWithoutLastSeenMessageInput = {
    create?: XOR<conversationMembersCreateWithoutLastSeenMessageInput, conversationMembersUncheckedCreateWithoutLastSeenMessageInput> | conversationMembersCreateWithoutLastSeenMessageInput[] | conversationMembersUncheckedCreateWithoutLastSeenMessageInput[]
    connectOrCreate?: conversationMembersCreateOrConnectWithoutLastSeenMessageInput | conversationMembersCreateOrConnectWithoutLastSeenMessageInput[]
    createMany?: conversationMembersCreateManyLastSeenMessageInputEnvelope
    connect?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
  }

  export type conversationsCreateNestedManyWithoutLastMessageInput = {
    create?: XOR<conversationsCreateWithoutLastMessageInput, conversationsUncheckedCreateWithoutLastMessageInput> | conversationsCreateWithoutLastMessageInput[] | conversationsUncheckedCreateWithoutLastMessageInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutLastMessageInput | conversationsCreateOrConnectWithoutLastMessageInput[]
    createMany?: conversationsCreateManyLastMessageInputEnvelope
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
  }

  export type conversationMembersUncheckedCreateNestedManyWithoutLastSeenMessageInput = {
    create?: XOR<conversationMembersCreateWithoutLastSeenMessageInput, conversationMembersUncheckedCreateWithoutLastSeenMessageInput> | conversationMembersCreateWithoutLastSeenMessageInput[] | conversationMembersUncheckedCreateWithoutLastSeenMessageInput[]
    connectOrCreate?: conversationMembersCreateOrConnectWithoutLastSeenMessageInput | conversationMembersCreateOrConnectWithoutLastSeenMessageInput[]
    createMany?: conversationMembersCreateManyLastSeenMessageInputEnvelope
    connect?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
  }

  export type conversationsUncheckedCreateNestedManyWithoutLastMessageInput = {
    create?: XOR<conversationsCreateWithoutLastMessageInput, conversationsUncheckedCreateWithoutLastMessageInput> | conversationsCreateWithoutLastMessageInput[] | conversationsUncheckedCreateWithoutLastMessageInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutLastMessageInput | conversationsCreateOrConnectWithoutLastMessageInput[]
    createMany?: conversationsCreateManyLastMessageInputEnvelope
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutMessagesInput
    upsert?: usersUpsertWithoutMessagesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutMessagesInput, usersUpdateWithoutMessagesInput>, usersUncheckedUpdateWithoutMessagesInput>
  }

  export type conversationsUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: conversationsCreateOrConnectWithoutMessagesInput
    upsert?: conversationsUpsertWithoutMessagesInput
    connect?: conversationsWhereUniqueInput
    update?: XOR<XOR<conversationsUpdateToOneWithWhereWithoutMessagesInput, conversationsUpdateWithoutMessagesInput>, conversationsUncheckedUpdateWithoutMessagesInput>
  }

  export type conversationMembersUpdateManyWithoutLastSeenMessageNestedInput = {
    create?: XOR<conversationMembersCreateWithoutLastSeenMessageInput, conversationMembersUncheckedCreateWithoutLastSeenMessageInput> | conversationMembersCreateWithoutLastSeenMessageInput[] | conversationMembersUncheckedCreateWithoutLastSeenMessageInput[]
    connectOrCreate?: conversationMembersCreateOrConnectWithoutLastSeenMessageInput | conversationMembersCreateOrConnectWithoutLastSeenMessageInput[]
    upsert?: conversationMembersUpsertWithWhereUniqueWithoutLastSeenMessageInput | conversationMembersUpsertWithWhereUniqueWithoutLastSeenMessageInput[]
    createMany?: conversationMembersCreateManyLastSeenMessageInputEnvelope
    set?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
    disconnect?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
    delete?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
    connect?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
    update?: conversationMembersUpdateWithWhereUniqueWithoutLastSeenMessageInput | conversationMembersUpdateWithWhereUniqueWithoutLastSeenMessageInput[]
    updateMany?: conversationMembersUpdateManyWithWhereWithoutLastSeenMessageInput | conversationMembersUpdateManyWithWhereWithoutLastSeenMessageInput[]
    deleteMany?: conversationMembersScalarWhereInput | conversationMembersScalarWhereInput[]
  }

  export type conversationsUpdateManyWithoutLastMessageNestedInput = {
    create?: XOR<conversationsCreateWithoutLastMessageInput, conversationsUncheckedCreateWithoutLastMessageInput> | conversationsCreateWithoutLastMessageInput[] | conversationsUncheckedCreateWithoutLastMessageInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutLastMessageInput | conversationsCreateOrConnectWithoutLastMessageInput[]
    upsert?: conversationsUpsertWithWhereUniqueWithoutLastMessageInput | conversationsUpsertWithWhereUniqueWithoutLastMessageInput[]
    createMany?: conversationsCreateManyLastMessageInputEnvelope
    set?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    disconnect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    delete?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    update?: conversationsUpdateWithWhereUniqueWithoutLastMessageInput | conversationsUpdateWithWhereUniqueWithoutLastMessageInput[]
    updateMany?: conversationsUpdateManyWithWhereWithoutLastMessageInput | conversationsUpdateManyWithWhereWithoutLastMessageInput[]
    deleteMany?: conversationsScalarWhereInput | conversationsScalarWhereInput[]
  }

  export type conversationMembersUncheckedUpdateManyWithoutLastSeenMessageNestedInput = {
    create?: XOR<conversationMembersCreateWithoutLastSeenMessageInput, conversationMembersUncheckedCreateWithoutLastSeenMessageInput> | conversationMembersCreateWithoutLastSeenMessageInput[] | conversationMembersUncheckedCreateWithoutLastSeenMessageInput[]
    connectOrCreate?: conversationMembersCreateOrConnectWithoutLastSeenMessageInput | conversationMembersCreateOrConnectWithoutLastSeenMessageInput[]
    upsert?: conversationMembersUpsertWithWhereUniqueWithoutLastSeenMessageInput | conversationMembersUpsertWithWhereUniqueWithoutLastSeenMessageInput[]
    createMany?: conversationMembersCreateManyLastSeenMessageInputEnvelope
    set?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
    disconnect?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
    delete?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
    connect?: conversationMembersWhereUniqueInput | conversationMembersWhereUniqueInput[]
    update?: conversationMembersUpdateWithWhereUniqueWithoutLastSeenMessageInput | conversationMembersUpdateWithWhereUniqueWithoutLastSeenMessageInput[]
    updateMany?: conversationMembersUpdateManyWithWhereWithoutLastSeenMessageInput | conversationMembersUpdateManyWithWhereWithoutLastSeenMessageInput[]
    deleteMany?: conversationMembersScalarWhereInput | conversationMembersScalarWhereInput[]
  }

  export type conversationsUncheckedUpdateManyWithoutLastMessageNestedInput = {
    create?: XOR<conversationsCreateWithoutLastMessageInput, conversationsUncheckedCreateWithoutLastMessageInput> | conversationsCreateWithoutLastMessageInput[] | conversationsUncheckedCreateWithoutLastMessageInput[]
    connectOrCreate?: conversationsCreateOrConnectWithoutLastMessageInput | conversationsCreateOrConnectWithoutLastMessageInput[]
    upsert?: conversationsUpsertWithWhereUniqueWithoutLastMessageInput | conversationsUpsertWithWhereUniqueWithoutLastMessageInput[]
    createMany?: conversationsCreateManyLastMessageInputEnvelope
    set?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    disconnect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    delete?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    connect?: conversationsWhereUniqueInput | conversationsWhereUniqueInput[]
    update?: conversationsUpdateWithWhereUniqueWithoutLastMessageInput | conversationsUpdateWithWhereUniqueWithoutLastMessageInput[]
    updateMany?: conversationsUpdateManyWithWhereWithoutLastMessageInput | conversationsUpdateManyWithWhereWithoutLastMessageInput[]
    deleteMany?: conversationsScalarWhereInput | conversationsScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type requestsCreateWithoutSenderInput = {
    id?: string
    createdAt?: Date | string
    receiver: usersCreateNestedOneWithoutReceivedInput
  }

  export type requestsUncheckedCreateWithoutSenderInput = {
    id?: string
    receiverId: string
    createdAt?: Date | string
  }

  export type requestsCreateOrConnectWithoutSenderInput = {
    where: requestsWhereUniqueInput
    create: XOR<requestsCreateWithoutSenderInput, requestsUncheckedCreateWithoutSenderInput>
  }

  export type requestsCreateManySenderInputEnvelope = {
    data: requestsCreateManySenderInput | requestsCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type requestsCreateWithoutReceiverInput = {
    id?: string
    createdAt?: Date | string
    sender: usersCreateNestedOneWithoutSentInput
  }

  export type requestsUncheckedCreateWithoutReceiverInput = {
    id?: string
    senderId: string
    createdAt?: Date | string
  }

  export type requestsCreateOrConnectWithoutReceiverInput = {
    where: requestsWhereUniqueInput
    create: XOR<requestsCreateWithoutReceiverInput, requestsUncheckedCreateWithoutReceiverInput>
  }

  export type requestsCreateManyReceiverInputEnvelope = {
    data: requestsCreateManyReceiverInput | requestsCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type friendsCreateWithoutUser1Input = {
    id?: string
    createdAt?: Date | string
    user2: usersCreateNestedOneWithoutFriends2Input
    conversation: conversationsCreateNestedOneWithoutFriendsInput
  }

  export type friendsUncheckedCreateWithoutUser1Input = {
    id?: string
    user2Id: string
    conversationId: string
    createdAt?: Date | string
  }

  export type friendsCreateOrConnectWithoutUser1Input = {
    where: friendsWhereUniqueInput
    create: XOR<friendsCreateWithoutUser1Input, friendsUncheckedCreateWithoutUser1Input>
  }

  export type friendsCreateManyUser1InputEnvelope = {
    data: friendsCreateManyUser1Input | friendsCreateManyUser1Input[]
    skipDuplicates?: boolean
  }

  export type friendsCreateWithoutUser2Input = {
    id?: string
    createdAt?: Date | string
    user1: usersCreateNestedOneWithoutFriends1Input
    conversation: conversationsCreateNestedOneWithoutFriendsInput
  }

  export type friendsUncheckedCreateWithoutUser2Input = {
    id?: string
    user1Id: string
    conversationId: string
    createdAt?: Date | string
  }

  export type friendsCreateOrConnectWithoutUser2Input = {
    where: friendsWhereUniqueInput
    create: XOR<friendsCreateWithoutUser2Input, friendsUncheckedCreateWithoutUser2Input>
  }

  export type friendsCreateManyUser2InputEnvelope = {
    data: friendsCreateManyUser2Input | friendsCreateManyUser2Input[]
    skipDuplicates?: boolean
  }

  export type conversationMembersCreateWithoutMemberInput = {
    id?: string
    createdAt?: Date | string
    conversation: conversationsCreateNestedOneWithoutConversationMembersInput
    lastSeenMessage?: messagesCreateNestedOneWithoutConversationMembersInput
  }

  export type conversationMembersUncheckedCreateWithoutMemberInput = {
    id?: string
    conversationId: string
    lastSeenMessageId?: string | null
    createdAt?: Date | string
  }

  export type conversationMembersCreateOrConnectWithoutMemberInput = {
    where: conversationMembersWhereUniqueInput
    create: XOR<conversationMembersCreateWithoutMemberInput, conversationMembersUncheckedCreateWithoutMemberInput>
  }

  export type conversationMembersCreateManyMemberInputEnvelope = {
    data: conversationMembersCreateManyMemberInput | conversationMembersCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type messagesCreateWithoutSenderInput = {
    id?: string
    type: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    conversation: conversationsCreateNestedOneWithoutMessagesInput
    conversationMembers?: conversationMembersCreateNestedManyWithoutLastSeenMessageInput
    conversations?: conversationsCreateNestedManyWithoutLastMessageInput
  }

  export type messagesUncheckedCreateWithoutSenderInput = {
    id?: string
    conversationId: string
    type: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    conversationMembers?: conversationMembersUncheckedCreateNestedManyWithoutLastSeenMessageInput
    conversations?: conversationsUncheckedCreateNestedManyWithoutLastMessageInput
  }

  export type messagesCreateOrConnectWithoutSenderInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutSenderInput, messagesUncheckedCreateWithoutSenderInput>
  }

  export type messagesCreateManySenderInputEnvelope = {
    data: messagesCreateManySenderInput | messagesCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type requestsUpsertWithWhereUniqueWithoutSenderInput = {
    where: requestsWhereUniqueInput
    update: XOR<requestsUpdateWithoutSenderInput, requestsUncheckedUpdateWithoutSenderInput>
    create: XOR<requestsCreateWithoutSenderInput, requestsUncheckedCreateWithoutSenderInput>
  }

  export type requestsUpdateWithWhereUniqueWithoutSenderInput = {
    where: requestsWhereUniqueInput
    data: XOR<requestsUpdateWithoutSenderInput, requestsUncheckedUpdateWithoutSenderInput>
  }

  export type requestsUpdateManyWithWhereWithoutSenderInput = {
    where: requestsScalarWhereInput
    data: XOR<requestsUpdateManyMutationInput, requestsUncheckedUpdateManyWithoutSenderInput>
  }

  export type requestsScalarWhereInput = {
    AND?: requestsScalarWhereInput | requestsScalarWhereInput[]
    OR?: requestsScalarWhereInput[]
    NOT?: requestsScalarWhereInput | requestsScalarWhereInput[]
    id?: StringFilter<"requests"> | string
    senderId?: StringFilter<"requests"> | string
    receiverId?: StringFilter<"requests"> | string
    createdAt?: DateTimeFilter<"requests"> | Date | string
  }

  export type requestsUpsertWithWhereUniqueWithoutReceiverInput = {
    where: requestsWhereUniqueInput
    update: XOR<requestsUpdateWithoutReceiverInput, requestsUncheckedUpdateWithoutReceiverInput>
    create: XOR<requestsCreateWithoutReceiverInput, requestsUncheckedCreateWithoutReceiverInput>
  }

  export type requestsUpdateWithWhereUniqueWithoutReceiverInput = {
    where: requestsWhereUniqueInput
    data: XOR<requestsUpdateWithoutReceiverInput, requestsUncheckedUpdateWithoutReceiverInput>
  }

  export type requestsUpdateManyWithWhereWithoutReceiverInput = {
    where: requestsScalarWhereInput
    data: XOR<requestsUpdateManyMutationInput, requestsUncheckedUpdateManyWithoutReceiverInput>
  }

  export type friendsUpsertWithWhereUniqueWithoutUser1Input = {
    where: friendsWhereUniqueInput
    update: XOR<friendsUpdateWithoutUser1Input, friendsUncheckedUpdateWithoutUser1Input>
    create: XOR<friendsCreateWithoutUser1Input, friendsUncheckedCreateWithoutUser1Input>
  }

  export type friendsUpdateWithWhereUniqueWithoutUser1Input = {
    where: friendsWhereUniqueInput
    data: XOR<friendsUpdateWithoutUser1Input, friendsUncheckedUpdateWithoutUser1Input>
  }

  export type friendsUpdateManyWithWhereWithoutUser1Input = {
    where: friendsScalarWhereInput
    data: XOR<friendsUpdateManyMutationInput, friendsUncheckedUpdateManyWithoutUser1Input>
  }

  export type friendsScalarWhereInput = {
    AND?: friendsScalarWhereInput | friendsScalarWhereInput[]
    OR?: friendsScalarWhereInput[]
    NOT?: friendsScalarWhereInput | friendsScalarWhereInput[]
    id?: StringFilter<"friends"> | string
    user1Id?: StringFilter<"friends"> | string
    user2Id?: StringFilter<"friends"> | string
    conversationId?: StringFilter<"friends"> | string
    createdAt?: DateTimeFilter<"friends"> | Date | string
  }

  export type friendsUpsertWithWhereUniqueWithoutUser2Input = {
    where: friendsWhereUniqueInput
    update: XOR<friendsUpdateWithoutUser2Input, friendsUncheckedUpdateWithoutUser2Input>
    create: XOR<friendsCreateWithoutUser2Input, friendsUncheckedCreateWithoutUser2Input>
  }

  export type friendsUpdateWithWhereUniqueWithoutUser2Input = {
    where: friendsWhereUniqueInput
    data: XOR<friendsUpdateWithoutUser2Input, friendsUncheckedUpdateWithoutUser2Input>
  }

  export type friendsUpdateManyWithWhereWithoutUser2Input = {
    where: friendsScalarWhereInput
    data: XOR<friendsUpdateManyMutationInput, friendsUncheckedUpdateManyWithoutUser2Input>
  }

  export type conversationMembersUpsertWithWhereUniqueWithoutMemberInput = {
    where: conversationMembersWhereUniqueInput
    update: XOR<conversationMembersUpdateWithoutMemberInput, conversationMembersUncheckedUpdateWithoutMemberInput>
    create: XOR<conversationMembersCreateWithoutMemberInput, conversationMembersUncheckedCreateWithoutMemberInput>
  }

  export type conversationMembersUpdateWithWhereUniqueWithoutMemberInput = {
    where: conversationMembersWhereUniqueInput
    data: XOR<conversationMembersUpdateWithoutMemberInput, conversationMembersUncheckedUpdateWithoutMemberInput>
  }

  export type conversationMembersUpdateManyWithWhereWithoutMemberInput = {
    where: conversationMembersScalarWhereInput
    data: XOR<conversationMembersUpdateManyMutationInput, conversationMembersUncheckedUpdateManyWithoutMemberInput>
  }

  export type conversationMembersScalarWhereInput = {
    AND?: conversationMembersScalarWhereInput | conversationMembersScalarWhereInput[]
    OR?: conversationMembersScalarWhereInput[]
    NOT?: conversationMembersScalarWhereInput | conversationMembersScalarWhereInput[]
    id?: StringFilter<"conversationMembers"> | string
    memberId?: StringFilter<"conversationMembers"> | string
    conversationId?: StringFilter<"conversationMembers"> | string
    lastSeenMessageId?: StringNullableFilter<"conversationMembers"> | string | null
    createdAt?: DateTimeFilter<"conversationMembers"> | Date | string
  }

  export type messagesUpsertWithWhereUniqueWithoutSenderInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutSenderInput, messagesUncheckedUpdateWithoutSenderInput>
    create: XOR<messagesCreateWithoutSenderInput, messagesUncheckedCreateWithoutSenderInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutSenderInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutSenderInput, messagesUncheckedUpdateWithoutSenderInput>
  }

  export type messagesUpdateManyWithWhereWithoutSenderInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutSenderInput>
  }

  export type messagesScalarWhereInput = {
    AND?: messagesScalarWhereInput | messagesScalarWhereInput[]
    OR?: messagesScalarWhereInput[]
    NOT?: messagesScalarWhereInput | messagesScalarWhereInput[]
    id?: StringFilter<"messages"> | string
    senderId?: StringFilter<"messages"> | string
    conversationId?: StringFilter<"messages"> | string
    type?: StringFilter<"messages"> | string
    content?: JsonFilter<"messages">
    createdAt?: DateTimeFilter<"messages"> | Date | string
  }

  export type usersCreateWithoutSentInput = {
    id?: string
    imageUrl?: string | null
    username: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    received?: requestsCreateNestedManyWithoutReceiverInput
    friends1?: friendsCreateNestedManyWithoutUser1Input
    friends2?: friendsCreateNestedManyWithoutUser2Input
    conversationMembers?: conversationMembersCreateNestedManyWithoutMemberInput
    messages?: messagesCreateNestedManyWithoutSenderInput
  }

  export type usersUncheckedCreateWithoutSentInput = {
    id?: string
    imageUrl?: string | null
    username: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    received?: requestsUncheckedCreateNestedManyWithoutReceiverInput
    friends1?: friendsUncheckedCreateNestedManyWithoutUser1Input
    friends2?: friendsUncheckedCreateNestedManyWithoutUser2Input
    conversationMembers?: conversationMembersUncheckedCreateNestedManyWithoutMemberInput
    messages?: messagesUncheckedCreateNestedManyWithoutSenderInput
  }

  export type usersCreateOrConnectWithoutSentInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSentInput, usersUncheckedCreateWithoutSentInput>
  }

  export type usersCreateWithoutReceivedInput = {
    id?: string
    imageUrl?: string | null
    username: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sent?: requestsCreateNestedManyWithoutSenderInput
    friends1?: friendsCreateNestedManyWithoutUser1Input
    friends2?: friendsCreateNestedManyWithoutUser2Input
    conversationMembers?: conversationMembersCreateNestedManyWithoutMemberInput
    messages?: messagesCreateNestedManyWithoutSenderInput
  }

  export type usersUncheckedCreateWithoutReceivedInput = {
    id?: string
    imageUrl?: string | null
    username: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sent?: requestsUncheckedCreateNestedManyWithoutSenderInput
    friends1?: friendsUncheckedCreateNestedManyWithoutUser1Input
    friends2?: friendsUncheckedCreateNestedManyWithoutUser2Input
    conversationMembers?: conversationMembersUncheckedCreateNestedManyWithoutMemberInput
    messages?: messagesUncheckedCreateNestedManyWithoutSenderInput
  }

  export type usersCreateOrConnectWithoutReceivedInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReceivedInput, usersUncheckedCreateWithoutReceivedInput>
  }

  export type usersUpsertWithoutSentInput = {
    update: XOR<usersUpdateWithoutSentInput, usersUncheckedUpdateWithoutSentInput>
    create: XOR<usersCreateWithoutSentInput, usersUncheckedCreateWithoutSentInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSentInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSentInput, usersUncheckedUpdateWithoutSentInput>
  }

  export type usersUpdateWithoutSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    received?: requestsUpdateManyWithoutReceiverNestedInput
    friends1?: friendsUpdateManyWithoutUser1NestedInput
    friends2?: friendsUpdateManyWithoutUser2NestedInput
    conversationMembers?: conversationMembersUpdateManyWithoutMemberNestedInput
    messages?: messagesUpdateManyWithoutSenderNestedInput
  }

  export type usersUncheckedUpdateWithoutSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    received?: requestsUncheckedUpdateManyWithoutReceiverNestedInput
    friends1?: friendsUncheckedUpdateManyWithoutUser1NestedInput
    friends2?: friendsUncheckedUpdateManyWithoutUser2NestedInput
    conversationMembers?: conversationMembersUncheckedUpdateManyWithoutMemberNestedInput
    messages?: messagesUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type usersUpsertWithoutReceivedInput = {
    update: XOR<usersUpdateWithoutReceivedInput, usersUncheckedUpdateWithoutReceivedInput>
    create: XOR<usersCreateWithoutReceivedInput, usersUncheckedCreateWithoutReceivedInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReceivedInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReceivedInput, usersUncheckedUpdateWithoutReceivedInput>
  }

  export type usersUpdateWithoutReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: requestsUpdateManyWithoutSenderNestedInput
    friends1?: friendsUpdateManyWithoutUser1NestedInput
    friends2?: friendsUpdateManyWithoutUser2NestedInput
    conversationMembers?: conversationMembersUpdateManyWithoutMemberNestedInput
    messages?: messagesUpdateManyWithoutSenderNestedInput
  }

  export type usersUncheckedUpdateWithoutReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: requestsUncheckedUpdateManyWithoutSenderNestedInput
    friends1?: friendsUncheckedUpdateManyWithoutUser1NestedInput
    friends2?: friendsUncheckedUpdateManyWithoutUser2NestedInput
    conversationMembers?: conversationMembersUncheckedUpdateManyWithoutMemberNestedInput
    messages?: messagesUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type usersCreateWithoutFriends1Input = {
    id?: string
    imageUrl?: string | null
    username: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sent?: requestsCreateNestedManyWithoutSenderInput
    received?: requestsCreateNestedManyWithoutReceiverInput
    friends2?: friendsCreateNestedManyWithoutUser2Input
    conversationMembers?: conversationMembersCreateNestedManyWithoutMemberInput
    messages?: messagesCreateNestedManyWithoutSenderInput
  }

  export type usersUncheckedCreateWithoutFriends1Input = {
    id?: string
    imageUrl?: string | null
    username: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sent?: requestsUncheckedCreateNestedManyWithoutSenderInput
    received?: requestsUncheckedCreateNestedManyWithoutReceiverInput
    friends2?: friendsUncheckedCreateNestedManyWithoutUser2Input
    conversationMembers?: conversationMembersUncheckedCreateNestedManyWithoutMemberInput
    messages?: messagesUncheckedCreateNestedManyWithoutSenderInput
  }

  export type usersCreateOrConnectWithoutFriends1Input = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFriends1Input, usersUncheckedCreateWithoutFriends1Input>
  }

  export type usersCreateWithoutFriends2Input = {
    id?: string
    imageUrl?: string | null
    username: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sent?: requestsCreateNestedManyWithoutSenderInput
    received?: requestsCreateNestedManyWithoutReceiverInput
    friends1?: friendsCreateNestedManyWithoutUser1Input
    conversationMembers?: conversationMembersCreateNestedManyWithoutMemberInput
    messages?: messagesCreateNestedManyWithoutSenderInput
  }

  export type usersUncheckedCreateWithoutFriends2Input = {
    id?: string
    imageUrl?: string | null
    username: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sent?: requestsUncheckedCreateNestedManyWithoutSenderInput
    received?: requestsUncheckedCreateNestedManyWithoutReceiverInput
    friends1?: friendsUncheckedCreateNestedManyWithoutUser1Input
    conversationMembers?: conversationMembersUncheckedCreateNestedManyWithoutMemberInput
    messages?: messagesUncheckedCreateNestedManyWithoutSenderInput
  }

  export type usersCreateOrConnectWithoutFriends2Input = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFriends2Input, usersUncheckedCreateWithoutFriends2Input>
  }

  export type conversationsCreateWithoutFriendsInput = {
    id?: string
    name?: string | null
    isGroup: boolean
    createdAt?: Date | string
    conversationMembers?: conversationMembersCreateNestedManyWithoutConversationInput
    messages?: messagesCreateNestedManyWithoutConversationInput
    lastMessage?: messagesCreateNestedOneWithoutConversationsInput
  }

  export type conversationsUncheckedCreateWithoutFriendsInput = {
    id?: string
    name?: string | null
    isGroup: boolean
    lastMessageId?: string | null
    createdAt?: Date | string
    conversationMembers?: conversationMembersUncheckedCreateNestedManyWithoutConversationInput
    messages?: messagesUncheckedCreateNestedManyWithoutConversationInput
  }

  export type conversationsCreateOrConnectWithoutFriendsInput = {
    where: conversationsWhereUniqueInput
    create: XOR<conversationsCreateWithoutFriendsInput, conversationsUncheckedCreateWithoutFriendsInput>
  }

  export type usersUpsertWithoutFriends1Input = {
    update: XOR<usersUpdateWithoutFriends1Input, usersUncheckedUpdateWithoutFriends1Input>
    create: XOR<usersCreateWithoutFriends1Input, usersUncheckedCreateWithoutFriends1Input>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFriends1Input = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFriends1Input, usersUncheckedUpdateWithoutFriends1Input>
  }

  export type usersUpdateWithoutFriends1Input = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: requestsUpdateManyWithoutSenderNestedInput
    received?: requestsUpdateManyWithoutReceiverNestedInput
    friends2?: friendsUpdateManyWithoutUser2NestedInput
    conversationMembers?: conversationMembersUpdateManyWithoutMemberNestedInput
    messages?: messagesUpdateManyWithoutSenderNestedInput
  }

  export type usersUncheckedUpdateWithoutFriends1Input = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: requestsUncheckedUpdateManyWithoutSenderNestedInput
    received?: requestsUncheckedUpdateManyWithoutReceiverNestedInput
    friends2?: friendsUncheckedUpdateManyWithoutUser2NestedInput
    conversationMembers?: conversationMembersUncheckedUpdateManyWithoutMemberNestedInput
    messages?: messagesUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type usersUpsertWithoutFriends2Input = {
    update: XOR<usersUpdateWithoutFriends2Input, usersUncheckedUpdateWithoutFriends2Input>
    create: XOR<usersCreateWithoutFriends2Input, usersUncheckedCreateWithoutFriends2Input>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFriends2Input = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFriends2Input, usersUncheckedUpdateWithoutFriends2Input>
  }

  export type usersUpdateWithoutFriends2Input = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: requestsUpdateManyWithoutSenderNestedInput
    received?: requestsUpdateManyWithoutReceiverNestedInput
    friends1?: friendsUpdateManyWithoutUser1NestedInput
    conversationMembers?: conversationMembersUpdateManyWithoutMemberNestedInput
    messages?: messagesUpdateManyWithoutSenderNestedInput
  }

  export type usersUncheckedUpdateWithoutFriends2Input = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: requestsUncheckedUpdateManyWithoutSenderNestedInput
    received?: requestsUncheckedUpdateManyWithoutReceiverNestedInput
    friends1?: friendsUncheckedUpdateManyWithoutUser1NestedInput
    conversationMembers?: conversationMembersUncheckedUpdateManyWithoutMemberNestedInput
    messages?: messagesUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type conversationsUpsertWithoutFriendsInput = {
    update: XOR<conversationsUpdateWithoutFriendsInput, conversationsUncheckedUpdateWithoutFriendsInput>
    create: XOR<conversationsCreateWithoutFriendsInput, conversationsUncheckedCreateWithoutFriendsInput>
    where?: conversationsWhereInput
  }

  export type conversationsUpdateToOneWithWhereWithoutFriendsInput = {
    where?: conversationsWhereInput
    data: XOR<conversationsUpdateWithoutFriendsInput, conversationsUncheckedUpdateWithoutFriendsInput>
  }

  export type conversationsUpdateWithoutFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationMembers?: conversationMembersUpdateManyWithoutConversationNestedInput
    messages?: messagesUpdateManyWithoutConversationNestedInput
    lastMessage?: messagesUpdateOneWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateWithoutFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationMembers?: conversationMembersUncheckedUpdateManyWithoutConversationNestedInput
    messages?: messagesUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type friendsCreateWithoutConversationInput = {
    id?: string
    createdAt?: Date | string
    user1: usersCreateNestedOneWithoutFriends1Input
    user2: usersCreateNestedOneWithoutFriends2Input
  }

  export type friendsUncheckedCreateWithoutConversationInput = {
    id?: string
    user1Id: string
    user2Id: string
    createdAt?: Date | string
  }

  export type friendsCreateOrConnectWithoutConversationInput = {
    where: friendsWhereUniqueInput
    create: XOR<friendsCreateWithoutConversationInput, friendsUncheckedCreateWithoutConversationInput>
  }

  export type friendsCreateManyConversationInputEnvelope = {
    data: friendsCreateManyConversationInput | friendsCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type conversationMembersCreateWithoutConversationInput = {
    id?: string
    createdAt?: Date | string
    member: usersCreateNestedOneWithoutConversationMembersInput
    lastSeenMessage?: messagesCreateNestedOneWithoutConversationMembersInput
  }

  export type conversationMembersUncheckedCreateWithoutConversationInput = {
    id?: string
    memberId: string
    lastSeenMessageId?: string | null
    createdAt?: Date | string
  }

  export type conversationMembersCreateOrConnectWithoutConversationInput = {
    where: conversationMembersWhereUniqueInput
    create: XOR<conversationMembersCreateWithoutConversationInput, conversationMembersUncheckedCreateWithoutConversationInput>
  }

  export type conversationMembersCreateManyConversationInputEnvelope = {
    data: conversationMembersCreateManyConversationInput | conversationMembersCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type messagesCreateWithoutConversationInput = {
    id?: string
    type: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    sender: usersCreateNestedOneWithoutMessagesInput
    conversationMembers?: conversationMembersCreateNestedManyWithoutLastSeenMessageInput
    conversations?: conversationsCreateNestedManyWithoutLastMessageInput
  }

  export type messagesUncheckedCreateWithoutConversationInput = {
    id?: string
    senderId: string
    type: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    conversationMembers?: conversationMembersUncheckedCreateNestedManyWithoutLastSeenMessageInput
    conversations?: conversationsUncheckedCreateNestedManyWithoutLastMessageInput
  }

  export type messagesCreateOrConnectWithoutConversationInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutConversationInput, messagesUncheckedCreateWithoutConversationInput>
  }

  export type messagesCreateManyConversationInputEnvelope = {
    data: messagesCreateManyConversationInput | messagesCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type messagesCreateWithoutConversationsInput = {
    id?: string
    type: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    sender: usersCreateNestedOneWithoutMessagesInput
    conversation: conversationsCreateNestedOneWithoutMessagesInput
    conversationMembers?: conversationMembersCreateNestedManyWithoutLastSeenMessageInput
  }

  export type messagesUncheckedCreateWithoutConversationsInput = {
    id?: string
    senderId: string
    conversationId: string
    type: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    conversationMembers?: conversationMembersUncheckedCreateNestedManyWithoutLastSeenMessageInput
  }

  export type messagesCreateOrConnectWithoutConversationsInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput>
  }

  export type friendsUpsertWithWhereUniqueWithoutConversationInput = {
    where: friendsWhereUniqueInput
    update: XOR<friendsUpdateWithoutConversationInput, friendsUncheckedUpdateWithoutConversationInput>
    create: XOR<friendsCreateWithoutConversationInput, friendsUncheckedCreateWithoutConversationInput>
  }

  export type friendsUpdateWithWhereUniqueWithoutConversationInput = {
    where: friendsWhereUniqueInput
    data: XOR<friendsUpdateWithoutConversationInput, friendsUncheckedUpdateWithoutConversationInput>
  }

  export type friendsUpdateManyWithWhereWithoutConversationInput = {
    where: friendsScalarWhereInput
    data: XOR<friendsUpdateManyMutationInput, friendsUncheckedUpdateManyWithoutConversationInput>
  }

  export type conversationMembersUpsertWithWhereUniqueWithoutConversationInput = {
    where: conversationMembersWhereUniqueInput
    update: XOR<conversationMembersUpdateWithoutConversationInput, conversationMembersUncheckedUpdateWithoutConversationInput>
    create: XOR<conversationMembersCreateWithoutConversationInput, conversationMembersUncheckedCreateWithoutConversationInput>
  }

  export type conversationMembersUpdateWithWhereUniqueWithoutConversationInput = {
    where: conversationMembersWhereUniqueInput
    data: XOR<conversationMembersUpdateWithoutConversationInput, conversationMembersUncheckedUpdateWithoutConversationInput>
  }

  export type conversationMembersUpdateManyWithWhereWithoutConversationInput = {
    where: conversationMembersScalarWhereInput
    data: XOR<conversationMembersUpdateManyMutationInput, conversationMembersUncheckedUpdateManyWithoutConversationInput>
  }

  export type messagesUpsertWithWhereUniqueWithoutConversationInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutConversationInput, messagesUncheckedUpdateWithoutConversationInput>
    create: XOR<messagesCreateWithoutConversationInput, messagesUncheckedCreateWithoutConversationInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutConversationInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutConversationInput, messagesUncheckedUpdateWithoutConversationInput>
  }

  export type messagesUpdateManyWithWhereWithoutConversationInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutConversationInput>
  }

  export type messagesUpsertWithoutConversationsInput = {
    update: XOR<messagesUpdateWithoutConversationsInput, messagesUncheckedUpdateWithoutConversationsInput>
    create: XOR<messagesCreateWithoutConversationsInput, messagesUncheckedCreateWithoutConversationsInput>
    where?: messagesWhereInput
  }

  export type messagesUpdateToOneWithWhereWithoutConversationsInput = {
    where?: messagesWhereInput
    data: XOR<messagesUpdateWithoutConversationsInput, messagesUncheckedUpdateWithoutConversationsInput>
  }

  export type messagesUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: usersUpdateOneRequiredWithoutMessagesNestedInput
    conversation?: conversationsUpdateOneRequiredWithoutMessagesNestedInput
    conversationMembers?: conversationMembersUpdateManyWithoutLastSeenMessageNestedInput
  }

  export type messagesUncheckedUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationMembers?: conversationMembersUncheckedUpdateManyWithoutLastSeenMessageNestedInput
  }

  export type usersCreateWithoutConversationMembersInput = {
    id?: string
    imageUrl?: string | null
    username: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sent?: requestsCreateNestedManyWithoutSenderInput
    received?: requestsCreateNestedManyWithoutReceiverInput
    friends1?: friendsCreateNestedManyWithoutUser1Input
    friends2?: friendsCreateNestedManyWithoutUser2Input
    messages?: messagesCreateNestedManyWithoutSenderInput
  }

  export type usersUncheckedCreateWithoutConversationMembersInput = {
    id?: string
    imageUrl?: string | null
    username: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sent?: requestsUncheckedCreateNestedManyWithoutSenderInput
    received?: requestsUncheckedCreateNestedManyWithoutReceiverInput
    friends1?: friendsUncheckedCreateNestedManyWithoutUser1Input
    friends2?: friendsUncheckedCreateNestedManyWithoutUser2Input
    messages?: messagesUncheckedCreateNestedManyWithoutSenderInput
  }

  export type usersCreateOrConnectWithoutConversationMembersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutConversationMembersInput, usersUncheckedCreateWithoutConversationMembersInput>
  }

  export type conversationsCreateWithoutConversationMembersInput = {
    id?: string
    name?: string | null
    isGroup: boolean
    createdAt?: Date | string
    friends?: friendsCreateNestedManyWithoutConversationInput
    messages?: messagesCreateNestedManyWithoutConversationInput
    lastMessage?: messagesCreateNestedOneWithoutConversationsInput
  }

  export type conversationsUncheckedCreateWithoutConversationMembersInput = {
    id?: string
    name?: string | null
    isGroup: boolean
    lastMessageId?: string | null
    createdAt?: Date | string
    friends?: friendsUncheckedCreateNestedManyWithoutConversationInput
    messages?: messagesUncheckedCreateNestedManyWithoutConversationInput
  }

  export type conversationsCreateOrConnectWithoutConversationMembersInput = {
    where: conversationsWhereUniqueInput
    create: XOR<conversationsCreateWithoutConversationMembersInput, conversationsUncheckedCreateWithoutConversationMembersInput>
  }

  export type messagesCreateWithoutConversationMembersInput = {
    id?: string
    type: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    sender: usersCreateNestedOneWithoutMessagesInput
    conversation: conversationsCreateNestedOneWithoutMessagesInput
    conversations?: conversationsCreateNestedManyWithoutLastMessageInput
  }

  export type messagesUncheckedCreateWithoutConversationMembersInput = {
    id?: string
    senderId: string
    conversationId: string
    type: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    conversations?: conversationsUncheckedCreateNestedManyWithoutLastMessageInput
  }

  export type messagesCreateOrConnectWithoutConversationMembersInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutConversationMembersInput, messagesUncheckedCreateWithoutConversationMembersInput>
  }

  export type usersUpsertWithoutConversationMembersInput = {
    update: XOR<usersUpdateWithoutConversationMembersInput, usersUncheckedUpdateWithoutConversationMembersInput>
    create: XOR<usersCreateWithoutConversationMembersInput, usersUncheckedCreateWithoutConversationMembersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutConversationMembersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutConversationMembersInput, usersUncheckedUpdateWithoutConversationMembersInput>
  }

  export type usersUpdateWithoutConversationMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: requestsUpdateManyWithoutSenderNestedInput
    received?: requestsUpdateManyWithoutReceiverNestedInput
    friends1?: friendsUpdateManyWithoutUser1NestedInput
    friends2?: friendsUpdateManyWithoutUser2NestedInput
    messages?: messagesUpdateManyWithoutSenderNestedInput
  }

  export type usersUncheckedUpdateWithoutConversationMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: requestsUncheckedUpdateManyWithoutSenderNestedInput
    received?: requestsUncheckedUpdateManyWithoutReceiverNestedInput
    friends1?: friendsUncheckedUpdateManyWithoutUser1NestedInput
    friends2?: friendsUncheckedUpdateManyWithoutUser2NestedInput
    messages?: messagesUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type conversationsUpsertWithoutConversationMembersInput = {
    update: XOR<conversationsUpdateWithoutConversationMembersInput, conversationsUncheckedUpdateWithoutConversationMembersInput>
    create: XOR<conversationsCreateWithoutConversationMembersInput, conversationsUncheckedCreateWithoutConversationMembersInput>
    where?: conversationsWhereInput
  }

  export type conversationsUpdateToOneWithWhereWithoutConversationMembersInput = {
    where?: conversationsWhereInput
    data: XOR<conversationsUpdateWithoutConversationMembersInput, conversationsUncheckedUpdateWithoutConversationMembersInput>
  }

  export type conversationsUpdateWithoutConversationMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: friendsUpdateManyWithoutConversationNestedInput
    messages?: messagesUpdateManyWithoutConversationNestedInput
    lastMessage?: messagesUpdateOneWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateWithoutConversationMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: friendsUncheckedUpdateManyWithoutConversationNestedInput
    messages?: messagesUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type messagesUpsertWithoutConversationMembersInput = {
    update: XOR<messagesUpdateWithoutConversationMembersInput, messagesUncheckedUpdateWithoutConversationMembersInput>
    create: XOR<messagesCreateWithoutConversationMembersInput, messagesUncheckedCreateWithoutConversationMembersInput>
    where?: messagesWhereInput
  }

  export type messagesUpdateToOneWithWhereWithoutConversationMembersInput = {
    where?: messagesWhereInput
    data: XOR<messagesUpdateWithoutConversationMembersInput, messagesUncheckedUpdateWithoutConversationMembersInput>
  }

  export type messagesUpdateWithoutConversationMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: usersUpdateOneRequiredWithoutMessagesNestedInput
    conversation?: conversationsUpdateOneRequiredWithoutMessagesNestedInput
    conversations?: conversationsUpdateManyWithoutLastMessageNestedInput
  }

  export type messagesUncheckedUpdateWithoutConversationMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: conversationsUncheckedUpdateManyWithoutLastMessageNestedInput
  }

  export type usersCreateWithoutMessagesInput = {
    id?: string
    imageUrl?: string | null
    username: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sent?: requestsCreateNestedManyWithoutSenderInput
    received?: requestsCreateNestedManyWithoutReceiverInput
    friends1?: friendsCreateNestedManyWithoutUser1Input
    friends2?: friendsCreateNestedManyWithoutUser2Input
    conversationMembers?: conversationMembersCreateNestedManyWithoutMemberInput
  }

  export type usersUncheckedCreateWithoutMessagesInput = {
    id?: string
    imageUrl?: string | null
    username: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sent?: requestsUncheckedCreateNestedManyWithoutSenderInput
    received?: requestsUncheckedCreateNestedManyWithoutReceiverInput
    friends1?: friendsUncheckedCreateNestedManyWithoutUser1Input
    friends2?: friendsUncheckedCreateNestedManyWithoutUser2Input
    conversationMembers?: conversationMembersUncheckedCreateNestedManyWithoutMemberInput
  }

  export type usersCreateOrConnectWithoutMessagesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
  }

  export type conversationsCreateWithoutMessagesInput = {
    id?: string
    name?: string | null
    isGroup: boolean
    createdAt?: Date | string
    friends?: friendsCreateNestedManyWithoutConversationInput
    conversationMembers?: conversationMembersCreateNestedManyWithoutConversationInput
    lastMessage?: messagesCreateNestedOneWithoutConversationsInput
  }

  export type conversationsUncheckedCreateWithoutMessagesInput = {
    id?: string
    name?: string | null
    isGroup: boolean
    lastMessageId?: string | null
    createdAt?: Date | string
    friends?: friendsUncheckedCreateNestedManyWithoutConversationInput
    conversationMembers?: conversationMembersUncheckedCreateNestedManyWithoutConversationInput
  }

  export type conversationsCreateOrConnectWithoutMessagesInput = {
    where: conversationsWhereUniqueInput
    create: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
  }

  export type conversationMembersCreateWithoutLastSeenMessageInput = {
    id?: string
    createdAt?: Date | string
    member: usersCreateNestedOneWithoutConversationMembersInput
    conversation: conversationsCreateNestedOneWithoutConversationMembersInput
  }

  export type conversationMembersUncheckedCreateWithoutLastSeenMessageInput = {
    id?: string
    memberId: string
    conversationId: string
    createdAt?: Date | string
  }

  export type conversationMembersCreateOrConnectWithoutLastSeenMessageInput = {
    where: conversationMembersWhereUniqueInput
    create: XOR<conversationMembersCreateWithoutLastSeenMessageInput, conversationMembersUncheckedCreateWithoutLastSeenMessageInput>
  }

  export type conversationMembersCreateManyLastSeenMessageInputEnvelope = {
    data: conversationMembersCreateManyLastSeenMessageInput | conversationMembersCreateManyLastSeenMessageInput[]
    skipDuplicates?: boolean
  }

  export type conversationsCreateWithoutLastMessageInput = {
    id?: string
    name?: string | null
    isGroup: boolean
    createdAt?: Date | string
    friends?: friendsCreateNestedManyWithoutConversationInput
    conversationMembers?: conversationMembersCreateNestedManyWithoutConversationInput
    messages?: messagesCreateNestedManyWithoutConversationInput
  }

  export type conversationsUncheckedCreateWithoutLastMessageInput = {
    id?: string
    name?: string | null
    isGroup: boolean
    createdAt?: Date | string
    friends?: friendsUncheckedCreateNestedManyWithoutConversationInput
    conversationMembers?: conversationMembersUncheckedCreateNestedManyWithoutConversationInput
    messages?: messagesUncheckedCreateNestedManyWithoutConversationInput
  }

  export type conversationsCreateOrConnectWithoutLastMessageInput = {
    where: conversationsWhereUniqueInput
    create: XOR<conversationsCreateWithoutLastMessageInput, conversationsUncheckedCreateWithoutLastMessageInput>
  }

  export type conversationsCreateManyLastMessageInputEnvelope = {
    data: conversationsCreateManyLastMessageInput | conversationsCreateManyLastMessageInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutMessagesInput = {
    update: XOR<usersUpdateWithoutMessagesInput, usersUncheckedUpdateWithoutMessagesInput>
    create: XOR<usersCreateWithoutMessagesInput, usersUncheckedCreateWithoutMessagesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutMessagesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutMessagesInput, usersUncheckedUpdateWithoutMessagesInput>
  }

  export type usersUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: requestsUpdateManyWithoutSenderNestedInput
    received?: requestsUpdateManyWithoutReceiverNestedInput
    friends1?: friendsUpdateManyWithoutUser1NestedInput
    friends2?: friendsUpdateManyWithoutUser2NestedInput
    conversationMembers?: conversationMembersUpdateManyWithoutMemberNestedInput
  }

  export type usersUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: requestsUncheckedUpdateManyWithoutSenderNestedInput
    received?: requestsUncheckedUpdateManyWithoutReceiverNestedInput
    friends1?: friendsUncheckedUpdateManyWithoutUser1NestedInput
    friends2?: friendsUncheckedUpdateManyWithoutUser2NestedInput
    conversationMembers?: conversationMembersUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type conversationsUpsertWithoutMessagesInput = {
    update: XOR<conversationsUpdateWithoutMessagesInput, conversationsUncheckedUpdateWithoutMessagesInput>
    create: XOR<conversationsCreateWithoutMessagesInput, conversationsUncheckedCreateWithoutMessagesInput>
    where?: conversationsWhereInput
  }

  export type conversationsUpdateToOneWithWhereWithoutMessagesInput = {
    where?: conversationsWhereInput
    data: XOR<conversationsUpdateWithoutMessagesInput, conversationsUncheckedUpdateWithoutMessagesInput>
  }

  export type conversationsUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: friendsUpdateManyWithoutConversationNestedInput
    conversationMembers?: conversationMembersUpdateManyWithoutConversationNestedInput
    lastMessage?: messagesUpdateOneWithoutConversationsNestedInput
  }

  export type conversationsUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: friendsUncheckedUpdateManyWithoutConversationNestedInput
    conversationMembers?: conversationMembersUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type conversationMembersUpsertWithWhereUniqueWithoutLastSeenMessageInput = {
    where: conversationMembersWhereUniqueInput
    update: XOR<conversationMembersUpdateWithoutLastSeenMessageInput, conversationMembersUncheckedUpdateWithoutLastSeenMessageInput>
    create: XOR<conversationMembersCreateWithoutLastSeenMessageInput, conversationMembersUncheckedCreateWithoutLastSeenMessageInput>
  }

  export type conversationMembersUpdateWithWhereUniqueWithoutLastSeenMessageInput = {
    where: conversationMembersWhereUniqueInput
    data: XOR<conversationMembersUpdateWithoutLastSeenMessageInput, conversationMembersUncheckedUpdateWithoutLastSeenMessageInput>
  }

  export type conversationMembersUpdateManyWithWhereWithoutLastSeenMessageInput = {
    where: conversationMembersScalarWhereInput
    data: XOR<conversationMembersUpdateManyMutationInput, conversationMembersUncheckedUpdateManyWithoutLastSeenMessageInput>
  }

  export type conversationsUpsertWithWhereUniqueWithoutLastMessageInput = {
    where: conversationsWhereUniqueInput
    update: XOR<conversationsUpdateWithoutLastMessageInput, conversationsUncheckedUpdateWithoutLastMessageInput>
    create: XOR<conversationsCreateWithoutLastMessageInput, conversationsUncheckedCreateWithoutLastMessageInput>
  }

  export type conversationsUpdateWithWhereUniqueWithoutLastMessageInput = {
    where: conversationsWhereUniqueInput
    data: XOR<conversationsUpdateWithoutLastMessageInput, conversationsUncheckedUpdateWithoutLastMessageInput>
  }

  export type conversationsUpdateManyWithWhereWithoutLastMessageInput = {
    where: conversationsScalarWhereInput
    data: XOR<conversationsUpdateManyMutationInput, conversationsUncheckedUpdateManyWithoutLastMessageInput>
  }

  export type conversationsScalarWhereInput = {
    AND?: conversationsScalarWhereInput | conversationsScalarWhereInput[]
    OR?: conversationsScalarWhereInput[]
    NOT?: conversationsScalarWhereInput | conversationsScalarWhereInput[]
    id?: StringFilter<"conversations"> | string
    name?: StringNullableFilter<"conversations"> | string | null
    isGroup?: BoolFilter<"conversations"> | boolean
    lastMessageId?: StringNullableFilter<"conversations"> | string | null
    createdAt?: DateTimeFilter<"conversations"> | Date | string
  }

  export type requestsCreateManySenderInput = {
    id?: string
    receiverId: string
    createdAt?: Date | string
  }

  export type requestsCreateManyReceiverInput = {
    id?: string
    senderId: string
    createdAt?: Date | string
  }

  export type friendsCreateManyUser1Input = {
    id?: string
    user2Id: string
    conversationId: string
    createdAt?: Date | string
  }

  export type friendsCreateManyUser2Input = {
    id?: string
    user1Id: string
    conversationId: string
    createdAt?: Date | string
  }

  export type conversationMembersCreateManyMemberInput = {
    id?: string
    conversationId: string
    lastSeenMessageId?: string | null
    createdAt?: Date | string
  }

  export type messagesCreateManySenderInput = {
    id?: string
    conversationId: string
    type: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type requestsUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: usersUpdateOneRequiredWithoutReceivedNestedInput
  }

  export type requestsUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type requestsUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type requestsUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: usersUpdateOneRequiredWithoutSentNestedInput
  }

  export type requestsUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type requestsUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendsUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user2?: usersUpdateOneRequiredWithoutFriends2NestedInput
    conversation?: conversationsUpdateOneRequiredWithoutFriendsNestedInput
  }

  export type friendsUncheckedUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendsUncheckedUpdateManyWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendsUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: usersUpdateOneRequiredWithoutFriends1NestedInput
    conversation?: conversationsUpdateOneRequiredWithoutFriendsNestedInput
  }

  export type friendsUncheckedUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendsUncheckedUpdateManyWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type conversationMembersUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: conversationsUpdateOneRequiredWithoutConversationMembersNestedInput
    lastSeenMessage?: messagesUpdateOneWithoutConversationMembersNestedInput
  }

  export type conversationMembersUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    lastSeenMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type conversationMembersUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    lastSeenMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: conversationsUpdateOneRequiredWithoutMessagesNestedInput
    conversationMembers?: conversationMembersUpdateManyWithoutLastSeenMessageNestedInput
    conversations?: conversationsUpdateManyWithoutLastMessageNestedInput
  }

  export type messagesUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationMembers?: conversationMembersUncheckedUpdateManyWithoutLastSeenMessageNestedInput
    conversations?: conversationsUncheckedUpdateManyWithoutLastMessageNestedInput
  }

  export type messagesUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendsCreateManyConversationInput = {
    id?: string
    user1Id: string
    user2Id: string
    createdAt?: Date | string
  }

  export type conversationMembersCreateManyConversationInput = {
    id?: string
    memberId: string
    lastSeenMessageId?: string | null
    createdAt?: Date | string
  }

  export type messagesCreateManyConversationInput = {
    id?: string
    senderId: string
    type: string
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type friendsUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: usersUpdateOneRequiredWithoutFriends1NestedInput
    user2?: usersUpdateOneRequiredWithoutFriends2NestedInput
  }

  export type friendsUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendsUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user1Id?: StringFieldUpdateOperationsInput | string
    user2Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type conversationMembersUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: usersUpdateOneRequiredWithoutConversationMembersNestedInput
    lastSeenMessage?: messagesUpdateOneWithoutConversationMembersNestedInput
  }

  export type conversationMembersUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    lastSeenMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type conversationMembersUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    lastSeenMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: usersUpdateOneRequiredWithoutMessagesNestedInput
    conversationMembers?: conversationMembersUpdateManyWithoutLastSeenMessageNestedInput
    conversations?: conversationsUpdateManyWithoutLastMessageNestedInput
  }

  export type messagesUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationMembers?: conversationMembersUncheckedUpdateManyWithoutLastSeenMessageNestedInput
    conversations?: conversationsUncheckedUpdateManyWithoutLastMessageNestedInput
  }

  export type messagesUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type conversationMembersCreateManyLastSeenMessageInput = {
    id?: string
    memberId: string
    conversationId: string
    createdAt?: Date | string
  }

  export type conversationsCreateManyLastMessageInput = {
    id?: string
    name?: string | null
    isGroup: boolean
    createdAt?: Date | string
  }

  export type conversationMembersUpdateWithoutLastSeenMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: usersUpdateOneRequiredWithoutConversationMembersNestedInput
    conversation?: conversationsUpdateOneRequiredWithoutConversationMembersNestedInput
  }

  export type conversationMembersUncheckedUpdateWithoutLastSeenMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type conversationMembersUncheckedUpdateManyWithoutLastSeenMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type conversationsUpdateWithoutLastMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: friendsUpdateManyWithoutConversationNestedInput
    conversationMembers?: conversationMembersUpdateManyWithoutConversationNestedInput
    messages?: messagesUpdateManyWithoutConversationNestedInput
  }

  export type conversationsUncheckedUpdateWithoutLastMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: friendsUncheckedUpdateManyWithoutConversationNestedInput
    conversationMembers?: conversationMembersUncheckedUpdateManyWithoutConversationNestedInput
    messages?: messagesUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type conversationsUncheckedUpdateManyWithoutLastMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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