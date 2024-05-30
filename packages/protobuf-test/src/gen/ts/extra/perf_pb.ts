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

// @generated by protoc-gen-es v1.10.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file extra/perf.proto (package perf.v1, syntax proto3)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum perf.v1.PerfEnum
 */
export enum PerfEnum {
  /**
   * @generated from enum value: PERF_ENUM_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: PERF_ENUM_YES = 1;
   */
  YES = 1,

  /**
   * @generated from enum value: PERF_ENUM_NO = 2;
   */
  NO = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(PerfEnum)
proto3.util.setEnumType(PerfEnum, "perf.v1.PerfEnum", [
  { no: 0, name: "PERF_ENUM_UNSPECIFIED" },
  { no: 1, name: "PERF_ENUM_YES" },
  { no: 2, name: "PERF_ENUM_NO" },
]);

/**
 * @generated from message perf.v1.PerfMessage
 */
export class PerfMessage extends Message<PerfMessage> {
  /**
   * @generated from field: double double_field = 1;
   */
  doubleField = 0;

  /**
   * @generated from field: int32 int32_field = 2;
   */
  int32Field = 0;

  /**
   * @generated from field: uint32 uint32_field = 3333;
   */
  uint32Field = 0;

  /**
   * @generated from field: optional int64 int64_field = 3;
   */
  int64Field?: bigint;

  /**
   * @generated from field: optional bool bool_field = 4;
   */
  boolField?: boolean;

  /**
   * @generated from field: string string_field = 5;
   */
  stringField = "";

  /**
   * @generated from field: bytes bytes_field = 6;
   */
  bytesField = new Uint8Array(0);

  /**
   * @generated from field: perf.v1.PerfEnum enum_field = 7;
   */
  enumField = PerfEnum.UNSPECIFIED;

  /**
   * @generated from field: perf.v1.PerfMessage small_message_field = 8;
   */
  smallMessageField?: PerfMessage;

  /**
   * @generated from field: int32 unused_field_1 = 9;
   */
  unusedField1 = 0;

  /**
   * @generated from field: int32 unused_field_2 = 10;
   */
  unusedField2 = 0;

  /**
   * @generated from field: int32 unused_field_3 = 11;
   */
  unusedField3 = 0;

  /**
   * @generated from field: int32 unused_field_4 = 12;
   */
  unusedField4 = 0;

  /**
   * @generated from field: int32 unused_field_5 = 13;
   */
  unusedField5 = 0;

  /**
   * @generated from field: int32 unused_field_6 = 14;
   */
  unusedField6 = 0;

  /**
   * @generated from field: int32 unused_field_7 = 15;
   */
  unusedField7 = 0;

  /**
   * @generated from field: int32 unused_field_8 = 16;
   */
  unusedField8 = 0;

  /**
   * @generated from field: int32 unused_field_9 = 17;
   */
  unusedField9 = 0;

  /**
   * @generated from field: int32 unused_field_10 = 18;
   */
  unusedField10 = 0;

  /**
   * @generated from field: repeated double repeated_double_field = 19;
   */
  repeatedDoubleField: number[] = [];

  /**
   * @generated from field: repeated int32 repeated_int32_field = 20;
   */
  repeatedInt32Field: number[] = [];

  /**
   * @generated from field: repeated int64 repeated_int64_field = 41;
   */
  repeatedInt64Field: bigint[] = [];

  /**
   * @generated from field: repeated bool repeated_bool_field = 22;
   */
  repeatedBoolField: boolean[] = [];

  /**
   * @generated from field: repeated string repeated_short_string_field = 23;
   */
  repeatedShortStringField: string[] = [];

  /**
   * @generated from field: repeated string repeated_long_string_field = 24;
   */
  repeatedLongStringField: string[] = [];

  /**
   * @generated from field: repeated bytes repeated_short_bytes_field = 25;
   */
  repeatedShortBytesField: Uint8Array[] = [];

  /**
   * @generated from field: repeated bytes repeated_long_bytes_field = 26;
   */
  repeatedLongBytesField: Uint8Array[] = [];

  /**
   * @generated from field: repeated perf.v1.PerfEnum repeated_enum_field = 27;
   */
  repeatedEnumField: PerfEnum[] = [];

  /**
   * @generated from field: repeated perf.v1.PerfMessage repeated_small_message_field = 28;
   */
  repeatedSmallMessageField: PerfMessage[] = [];

  /**
   * @generated from field: map<int32, int32> map_int32_int32 = 30;
   */
  mapInt32Int32: { [key: number]: number } = {};

  /**
   * @generated from field: map<int64, int64> map_int64_int64 = 31;
   */
  mapInt64Int64: { [key: string]: bigint } = {};

  /**
   * @generated from field: map<string, perf.v1.PerfMessage> map_string_message = 32;
   */
  mapStringMessage: { [key: string]: PerfMessage } = {};

  /**
   * @generated from field: map<string, perf.v1.PerfEnum> map_string_enum = 33;
   */
  mapStringEnum: { [key: string]: PerfEnum } = {};

  /**
   * @generated from oneof perf.v1.PerfMessage.oneof_enum
   */
  oneofEnum: {
    /**
     * @generated from field: perf.v1.PerfEnum oneof_enum_verified = 34;
     */
    value: PerfEnum;
    case: "oneofEnumVerified";
  } | {
    /**
     * @generated from field: perf.v1.PerfEnum oneof_enum_cromulent = 35;
     */
    value: PerfEnum;
    case: "oneofEnumCromulent";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * @generated from oneof perf.v1.PerfMessage.oneof_message
   */
  oneofMessage: {
    /**
     * @generated from field: perf.v1.PerfMessage oneof_message_field = 36;
     */
    value: PerfMessage;
    case: "oneofMessageField";
  } | {
    /**
     * @generated from field: perf.v1.PerfMessage oneof_small_message_field = 37;
     */
    value: PerfMessage;
    case: "oneofSmallMessageField";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * @generated from oneof perf.v1.PerfMessage.oneof_scalar
   */
  oneofScalar: {
    /**
     * @generated from field: int32 oneof_int32_field = 38;
     */
    value: number;
    case: "oneofInt32Field";
  } | {
    /**
     * @generated from field: bool oneof_bool_field = 39;
     */
    value: boolean;
    case: "oneofBoolField";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * @generated from field: uint32 id = 40;
   */
  id = 0;

  constructor(data?: PartialMessage<PerfMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "perf.v1.PerfMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "double_field", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "int32_field", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3333, name: "uint32_field", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "int64_field", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 4, name: "bool_field", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 5, name: "string_field", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "bytes_field", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 7, name: "enum_field", kind: "enum", T: proto3.getEnumType(PerfEnum) },
    { no: 8, name: "small_message_field", kind: "message", T: PerfMessage },
    { no: 9, name: "unused_field_1", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 10, name: "unused_field_2", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 11, name: "unused_field_3", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 12, name: "unused_field_4", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 13, name: "unused_field_5", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 14, name: "unused_field_6", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 15, name: "unused_field_7", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 16, name: "unused_field_8", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 17, name: "unused_field_9", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 18, name: "unused_field_10", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 19, name: "repeated_double_field", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true },
    { no: 20, name: "repeated_int32_field", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 41, name: "repeated_int64_field", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 22, name: "repeated_bool_field", kind: "scalar", T: 8 /* ScalarType.BOOL */, repeated: true },
    { no: 23, name: "repeated_short_string_field", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 24, name: "repeated_long_string_field", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 25, name: "repeated_short_bytes_field", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
    { no: 26, name: "repeated_long_bytes_field", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
    { no: 27, name: "repeated_enum_field", kind: "enum", T: proto3.getEnumType(PerfEnum), repeated: true },
    { no: 28, name: "repeated_small_message_field", kind: "message", T: PerfMessage, repeated: true },
    { no: 30, name: "map_int32_int32", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "scalar", T: 5 /* ScalarType.INT32 */} },
    { no: 31, name: "map_int64_int64", kind: "map", K: 3 /* ScalarType.INT64 */, V: {kind: "scalar", T: 3 /* ScalarType.INT64 */} },
    { no: 32, name: "map_string_message", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: PerfMessage} },
    { no: 33, name: "map_string_enum", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "enum", T: proto3.getEnumType(PerfEnum)} },
    { no: 34, name: "oneof_enum_verified", kind: "enum", T: proto3.getEnumType(PerfEnum), oneof: "oneof_enum" },
    { no: 35, name: "oneof_enum_cromulent", kind: "enum", T: proto3.getEnumType(PerfEnum), oneof: "oneof_enum" },
    { no: 36, name: "oneof_message_field", kind: "message", T: PerfMessage, oneof: "oneof_message" },
    { no: 37, name: "oneof_small_message_field", kind: "message", T: PerfMessage, oneof: "oneof_message" },
    { no: 38, name: "oneof_int32_field", kind: "scalar", T: 5 /* ScalarType.INT32 */, oneof: "oneof_scalar" },
    { no: 39, name: "oneof_bool_field", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "oneof_scalar" },
    { no: 40, name: "id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PerfMessage {
    return new PerfMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PerfMessage {
    return new PerfMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PerfMessage {
    return new PerfMessage().fromJsonString(jsonString, options);
  }

  static equals(a: PerfMessage | PlainMessage<PerfMessage> | undefined, b: PerfMessage | PlainMessage<PerfMessage> | undefined): boolean {
    return proto3.util.equals(PerfMessage, a, b);
  }
}

