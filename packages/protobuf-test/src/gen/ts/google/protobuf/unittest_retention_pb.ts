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

// @generated by protoc-gen-es v1.8.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file google/protobuf/unittest_retention.proto (package protobuf_unittest, syntax proto2)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { EnumOptions, EnumValueOptions, ExtensionRangeOptions, FieldOptions, FileOptions, Message, MessageOptions, MethodOptions, OneofOptions, proto2, ServiceOptions } from "@bufbuild/protobuf";

/**
 * @generated from enum protobuf_unittest.TopLevelEnum
 */
export enum TopLevelEnum {
  /**
   * @generated from enum value: TOP_LEVEL_UNKNOWN = 0;
   */
  TOP_LEVEL_UNKNOWN = 0,
}
// Retrieve enum metadata with: proto2.getEnumType(TopLevelEnum)
proto2.util.setEnumType(TopLevelEnum, "protobuf_unittest.TopLevelEnum", [
  { no: 0, name: "TOP_LEVEL_UNKNOWN" },
]);

/**
 * Retention attributes set on fields nested within a message
 *
 * @generated from message protobuf_unittest.OptionsMessage
 */
export class OptionsMessage extends Message<OptionsMessage> {
  /**
   * @generated from field: optional int32 plain_field = 1;
   */
  plainField?: number;

  /**
   * @generated from field: optional int32 runtime_retention_field = 2;
   */
  runtimeRetentionField?: number;

  /**
   * @generated from field: optional int32 source_retention_field = 3;
   */
  sourceRetentionField?: number;

  constructor(data?: PartialMessage<OptionsMessage>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "protobuf_unittest.OptionsMessage";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "plain_field", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 2, name: "runtime_retention_field", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 3, name: "source_retention_field", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OptionsMessage {
    return new OptionsMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OptionsMessage {
    return new OptionsMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OptionsMessage {
    return new OptionsMessage().fromJsonString(jsonString, options);
  }

  static equals(a: OptionsMessage | PlainMessage<OptionsMessage> | undefined, b: OptionsMessage | PlainMessage<OptionsMessage> | undefined): boolean {
    return proto2.util.equals(OptionsMessage, a, b);
  }
}

/**
 * @generated from message protobuf_unittest.Extendee
 */
export class Extendee extends Message<Extendee> {
  constructor(data?: PartialMessage<Extendee>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "protobuf_unittest.Extendee";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Extendee {
    return new Extendee().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Extendee {
    return new Extendee().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Extendee {
    return new Extendee().fromJsonString(jsonString, options);
  }

  static equals(a: Extendee | PlainMessage<Extendee> | undefined, b: Extendee | PlainMessage<Extendee> | undefined): boolean {
    return proto2.util.equals(Extendee, a, b);
  }
}

/**
 * @generated from message protobuf_unittest.TopLevelMessage
 */
export class TopLevelMessage extends Message<TopLevelMessage> {
  /**
   * @generated from field: optional float f = 1;
   */
  f?: number;

  /**
   * @generated from oneof protobuf_unittest.TopLevelMessage.o
   */
  o: {
    /**
     * @generated from field: int64 i = 2;
     */
    value: bigint;
    case: "i";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<TopLevelMessage>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "protobuf_unittest.TopLevelMessage";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "f", kind: "scalar", T: 2 /* ScalarType.FLOAT */, opt: true },
    { no: 2, name: "i", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "o" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TopLevelMessage {
    return new TopLevelMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TopLevelMessage {
    return new TopLevelMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TopLevelMessage {
    return new TopLevelMessage().fromJsonString(jsonString, options);
  }

  static equals(a: TopLevelMessage | PlainMessage<TopLevelMessage> | undefined, b: TopLevelMessage | PlainMessage<TopLevelMessage> | undefined): boolean {
    return proto2.util.equals(TopLevelMessage, a, b);
  }
}

/**
 * @generated from enum protobuf_unittest.TopLevelMessage.NestedEnum
 */
export enum TopLevelMessage_NestedEnum {
  /**
   * @generated from enum value: NESTED_UNKNOWN = 0;
   */
  NESTED_UNKNOWN = 0,
}
// Retrieve enum metadata with: proto2.getEnumType(TopLevelMessage_NestedEnum)
proto2.util.setEnumType(TopLevelMessage_NestedEnum, "protobuf_unittest.TopLevelMessage.NestedEnum", [
  { no: 0, name: "NESTED_UNKNOWN" },
]);

/**
 * @generated from message protobuf_unittest.TopLevelMessage.NestedMessage
 */
export class TopLevelMessage_NestedMessage extends Message<TopLevelMessage_NestedMessage> {
  constructor(data?: PartialMessage<TopLevelMessage_NestedMessage>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "protobuf_unittest.TopLevelMessage.NestedMessage";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TopLevelMessage_NestedMessage {
    return new TopLevelMessage_NestedMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TopLevelMessage_NestedMessage {
    return new TopLevelMessage_NestedMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TopLevelMessage_NestedMessage {
    return new TopLevelMessage_NestedMessage().fromJsonString(jsonString, options);
  }

  static equals(a: TopLevelMessage_NestedMessage | PlainMessage<TopLevelMessage_NestedMessage> | undefined, b: TopLevelMessage_NestedMessage | PlainMessage<TopLevelMessage_NestedMessage> | undefined): boolean {
    return proto2.util.equals(TopLevelMessage_NestedMessage, a, b);
  }
}

/**
 * @generated from extension: optional string s = 2;
 */
export const TopLevelMessage_s = proto2.makeExtension<Extendee, string>(
  "protobuf_unittest.TopLevelMessage.s", 
  Extendee, 
  { no: 2, kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
);

/**
 * @generated from extension: optional int32 plain_option = 505092806;
 */
export const plain_option = proto2.makeExtension<FileOptions, number>(
  "protobuf_unittest.plain_option", 
  FileOptions, 
  { no: 505092806, kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
);

/**
 * @generated from extension: optional int32 runtime_retention_option = 505039132;
 */
export const runtime_retention_option = proto2.makeExtension<FileOptions, number>(
  "protobuf_unittest.runtime_retention_option", 
  FileOptions, 
  { no: 505039132, kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
);

/**
 * @generated from extension: optional int32 source_retention_option = 504878676;
 */
export const source_retention_option = proto2.makeExtension<FileOptions, number>(
  "protobuf_unittest.source_retention_option", 
  FileOptions, 
  { no: 504878676, kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
);

/**
 * @generated from extension: optional protobuf_unittest.OptionsMessage file_option = 504871168;
 */
export const file_option = proto2.makeExtension<FileOptions, OptionsMessage>(
  "protobuf_unittest.file_option", 
  FileOptions, 
  () => ({ no: 504871168, kind: "message", T: OptionsMessage, opt: true }),
);

/**
 * @generated from extension: repeated protobuf_unittest.OptionsMessage repeated_options = 504823570;
 */
export const repeated_options = proto2.makeExtension<FileOptions, OptionsMessage[]>(
  "protobuf_unittest.repeated_options", 
  FileOptions, 
  () => ({ no: 504823570, kind: "message", T: OptionsMessage, repeated: true }),
);

/**
 * @generated from extension: optional protobuf_unittest.OptionsMessage extension_range_option = 504822148;
 */
export const extension_range_option = proto2.makeExtension<ExtensionRangeOptions, OptionsMessage>(
  "protobuf_unittest.extension_range_option", 
  ExtensionRangeOptions, 
  () => ({ no: 504822148, kind: "message", T: OptionsMessage, opt: true }),
);

/**
 * @generated from extension: optional protobuf_unittest.OptionsMessage message_option = 504820819;
 */
export const message_option = proto2.makeExtension<MessageOptions, OptionsMessage>(
  "protobuf_unittest.message_option", 
  MessageOptions, 
  () => ({ no: 504820819, kind: "message", T: OptionsMessage, opt: true }),
);

/**
 * @generated from extension: optional protobuf_unittest.OptionsMessage field_option = 504589219;
 */
export const field_option = proto2.makeExtension<FieldOptions, OptionsMessage>(
  "protobuf_unittest.field_option", 
  FieldOptions, 
  () => ({ no: 504589219, kind: "message", T: OptionsMessage, opt: true }),
);

/**
 * @generated from extension: optional protobuf_unittest.OptionsMessage oneof_option = 504479153;
 */
export const oneof_option = proto2.makeExtension<OneofOptions, OptionsMessage>(
  "protobuf_unittest.oneof_option", 
  OneofOptions, 
  () => ({ no: 504479153, kind: "message", T: OptionsMessage, opt: true }),
);

/**
 * @generated from extension: optional protobuf_unittest.OptionsMessage enum_option = 504451567;
 */
export const enum_option = proto2.makeExtension<EnumOptions, OptionsMessage>(
  "protobuf_unittest.enum_option", 
  EnumOptions, 
  () => ({ no: 504451567, kind: "message", T: OptionsMessage, opt: true }),
);

/**
 * @generated from extension: optional protobuf_unittest.OptionsMessage enum_entry_option = 504450522;
 */
export const enum_entry_option = proto2.makeExtension<EnumValueOptions, OptionsMessage>(
  "protobuf_unittest.enum_entry_option", 
  EnumValueOptions, 
  () => ({ no: 504450522, kind: "message", T: OptionsMessage, opt: true }),
);

/**
 * @generated from extension: optional protobuf_unittest.OptionsMessage service_option = 504387709;
 */
export const service_option = proto2.makeExtension<ServiceOptions, OptionsMessage>(
  "protobuf_unittest.service_option", 
  ServiceOptions, 
  () => ({ no: 504387709, kind: "message", T: OptionsMessage, opt: true }),
);

/**
 * @generated from extension: optional protobuf_unittest.OptionsMessage method_option = 504349420;
 */
export const method_option = proto2.makeExtension<MethodOptions, OptionsMessage>(
  "protobuf_unittest.method_option", 
  MethodOptions, 
  () => ({ no: 504349420, kind: "message", T: OptionsMessage, opt: true }),
);

/**
 * @generated from extension: optional int32 i = 1;
 */
export const i = proto2.makeExtension<Extendee, number>(
  "protobuf_unittest.i", 
  Extendee, 
  { no: 1, kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
);

