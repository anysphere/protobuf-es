// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.10.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file extra/jstype-proto2.proto (package spec, syntax proto2)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto2 } from "@bufbuild/protobuf";

/**
 * @generated from message spec.JSTypeProto2OmittedMessage
 */
export declare class JSTypeProto2OmittedMessage extends Message<JSTypeProto2OmittedMessage> {
  /**
   * @generated from field: optional fixed64 fixed64_field = 1;
   */
  fixed64Field?: bigint;

  /**
   * @generated from field: optional int64 int64_field = 3;
   */
  int64Field?: bigint;

  /**
   * @generated from field: optional sfixed64 sfixed64_field = 4;
   */
  sfixed64Field?: bigint;

  /**
   * @generated from field: optional sint64 sint64_field = 5;
   */
  sint64Field?: bigint;

  /**
   * @generated from field: optional uint64 uint64_field = 6;
   */
  uint64Field?: bigint;

  /**
   * @generated from field: repeated fixed64 repeated_fixed64_field = 11;
   */
  repeatedFixed64Field: bigint[];

  /**
   * @generated from field: repeated int64 repeated_int64_field = 12;
   */
  repeatedInt64Field: bigint[];

  /**
   * @generated from field: repeated sfixed64 repeated_sfixed64_field = 13;
   */
  repeatedSfixed64Field: bigint[];

  /**
   * @generated from field: repeated sint64 repeated_sint64_field = 14;
   */
  repeatedSint64Field: bigint[];

  /**
   * @generated from field: repeated uint64 repeated_uint64_field = 15;
   */
  repeatedUint64Field: bigint[];

  constructor(data?: PartialMessage<JSTypeProto2OmittedMessage>);

  static readonly runtime: typeof proto2;
  static readonly typeName = "spec.JSTypeProto2OmittedMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JSTypeProto2OmittedMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JSTypeProto2OmittedMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JSTypeProto2OmittedMessage;

  static equals(a: JSTypeProto2OmittedMessage | PlainMessage<JSTypeProto2OmittedMessage> | undefined, b: JSTypeProto2OmittedMessage | PlainMessage<JSTypeProto2OmittedMessage> | undefined): boolean;
}

/**
 * @generated from message spec.JSTypeProto2NormalMessage
 */
export declare class JSTypeProto2NormalMessage extends Message<JSTypeProto2NormalMessage> {
  /**
   * @generated from field: optional fixed64 fixed64_field = 1 [jstype = JS_NORMAL];
   */
  fixed64Field?: bigint;

  /**
   * @generated from field: optional int64 int64_field = 3 [jstype = JS_NORMAL];
   */
  int64Field?: bigint;

  /**
   * @generated from field: optional sfixed64 sfixed64_field = 4 [jstype = JS_NORMAL];
   */
  sfixed64Field?: bigint;

  /**
   * @generated from field: optional sint64 sint64_field = 5 [jstype = JS_NORMAL];
   */
  sint64Field?: bigint;

  /**
   * @generated from field: optional uint64 uint64_field = 6 [jstype = JS_NORMAL];
   */
  uint64Field?: bigint;

  /**
   * @generated from field: repeated fixed64 repeated_fixed64_field = 11 [jstype = JS_NORMAL];
   */
  repeatedFixed64Field: bigint[];

  /**
   * @generated from field: repeated int64 repeated_int64_field = 12 [jstype = JS_NORMAL];
   */
  repeatedInt64Field: bigint[];

  /**
   * @generated from field: repeated sfixed64 repeated_sfixed64_field = 13 [jstype = JS_NORMAL];
   */
  repeatedSfixed64Field: bigint[];

  /**
   * @generated from field: repeated sint64 repeated_sint64_field = 14 [jstype = JS_NORMAL];
   */
  repeatedSint64Field: bigint[];

  /**
   * @generated from field: repeated uint64 repeated_uint64_field = 15 [jstype = JS_NORMAL];
   */
  repeatedUint64Field: bigint[];

  constructor(data?: PartialMessage<JSTypeProto2NormalMessage>);

  static readonly runtime: typeof proto2;
  static readonly typeName = "spec.JSTypeProto2NormalMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JSTypeProto2NormalMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JSTypeProto2NormalMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JSTypeProto2NormalMessage;

  static equals(a: JSTypeProto2NormalMessage | PlainMessage<JSTypeProto2NormalMessage> | undefined, b: JSTypeProto2NormalMessage | PlainMessage<JSTypeProto2NormalMessage> | undefined): boolean;
}

/**
 * @generated from message spec.JSTypeProto2StringMessage
 */
export declare class JSTypeProto2StringMessage extends Message<JSTypeProto2StringMessage> {
  /**
   * @generated from field: optional fixed64 fixed64_field = 1 [jstype = JS_STRING];
   */
  fixed64Field?: string;

  /**
   * @generated from field: optional int64 int64_field = 3 [jstype = JS_STRING];
   */
  int64Field?: string;

  /**
   * @generated from field: optional sfixed64 sfixed64_field = 4 [jstype = JS_STRING];
   */
  sfixed64Field?: string;

  /**
   * @generated from field: optional sint64 sint64_field = 5 [jstype = JS_STRING];
   */
  sint64Field?: string;

  /**
   * @generated from field: optional uint64 uint64_field = 6 [jstype = JS_STRING];
   */
  uint64Field?: string;

  /**
   * @generated from field: repeated fixed64 repeated_fixed64_field = 11 [jstype = JS_STRING];
   */
  repeatedFixed64Field: string[];

  /**
   * @generated from field: repeated int64 repeated_int64_field = 12 [jstype = JS_STRING];
   */
  repeatedInt64Field: string[];

  /**
   * @generated from field: repeated sfixed64 repeated_sfixed64_field = 13 [jstype = JS_STRING];
   */
  repeatedSfixed64Field: string[];

  /**
   * @generated from field: repeated sint64 repeated_sint64_field = 14 [jstype = JS_STRING];
   */
  repeatedSint64Field: string[];

  /**
   * @generated from field: repeated uint64 repeated_uint64_field = 15 [jstype = JS_STRING];
   */
  repeatedUint64Field: string[];

  constructor(data?: PartialMessage<JSTypeProto2StringMessage>);

  static readonly runtime: typeof proto2;
  static readonly typeName = "spec.JSTypeProto2StringMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JSTypeProto2StringMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JSTypeProto2StringMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JSTypeProto2StringMessage;

  static equals(a: JSTypeProto2StringMessage | PlainMessage<JSTypeProto2StringMessage> | undefined, b: JSTypeProto2StringMessage | PlainMessage<JSTypeProto2StringMessage> | undefined): boolean;
}

/**
 * @generated from message spec.JSTypeProto2NumberMessage
 */
export declare class JSTypeProto2NumberMessage extends Message<JSTypeProto2NumberMessage> {
  /**
   * @generated from field: optional fixed64 fixed64_field = 1 [jstype = JS_NUMBER];
   */
  fixed64Field?: bigint;

  /**
   * @generated from field: optional int64 int64_field = 3 [jstype = JS_NUMBER];
   */
  int64Field?: bigint;

  /**
   * @generated from field: optional sfixed64 sfixed64_field = 4 [jstype = JS_NUMBER];
   */
  sfixed64Field?: bigint;

  /**
   * @generated from field: optional sint64 sint64_field = 5 [jstype = JS_NUMBER];
   */
  sint64Field?: bigint;

  /**
   * @generated from field: optional uint64 uint64_field = 6 [jstype = JS_NUMBER];
   */
  uint64Field?: bigint;

  /**
   * @generated from field: repeated fixed64 repeated_fixed64_field = 11 [jstype = JS_NUMBER];
   */
  repeatedFixed64Field: bigint[];

  /**
   * @generated from field: repeated int64 repeated_int64_field = 12 [jstype = JS_NUMBER];
   */
  repeatedInt64Field: bigint[];

  /**
   * @generated from field: repeated sfixed64 repeated_sfixed64_field = 13 [jstype = JS_NUMBER];
   */
  repeatedSfixed64Field: bigint[];

  /**
   * @generated from field: repeated sint64 repeated_sint64_field = 14 [jstype = JS_NUMBER];
   */
  repeatedSint64Field: bigint[];

  /**
   * @generated from field: repeated uint64 repeated_uint64_field = 15 [jstype = JS_NUMBER];
   */
  repeatedUint64Field: bigint[];

  constructor(data?: PartialMessage<JSTypeProto2NumberMessage>);

  static readonly runtime: typeof proto2;
  static readonly typeName = "spec.JSTypeProto2NumberMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JSTypeProto2NumberMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JSTypeProto2NumberMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JSTypeProto2NumberMessage;

  static equals(a: JSTypeProto2NumberMessage | PlainMessage<JSTypeProto2NumberMessage> | undefined, b: JSTypeProto2NumberMessage | PlainMessage<JSTypeProto2NumberMessage> | undefined): boolean;
}

