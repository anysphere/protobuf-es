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

// Author: liujisi@google.com (Pherl Liu)

// @generated by protoc-gen-es v2.0.0-beta.2 with parameter "ts_nocheck=false,target=ts,import_extension=js"
// @generated from file google/protobuf/unittest_import_public.proto (package protobuf_unittest_import, syntax proto2)
/* eslint-disable */

import type { GenDescFile, GenDescMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/protobuf/unittest_import_public.proto.
 */
export const file_google_protobuf_unittest_import_public: GenDescFile = /*@__PURE__*/
  fileDesc("Cixnb29nbGUvcHJvdG9idWYvdW5pdHRlc3RfaW1wb3J0X3B1YmxpYy5wcm90bxIYcHJvdG9idWZfdW5pdHRlc3RfaW1wb3J0IiAKE1B1YmxpY0ltcG9ydE1lc3NhZ2USCQoBZRgBIAEoBUIaChhjb20uZ29vZ2xlLnByb3RvYnVmLnRlc3Q");

/**
 * @generated from message protobuf_unittest_import.PublicImportMessage
 */
export type PublicImportMessage = Message<"protobuf_unittest_import.PublicImportMessage"> & {
  /**
   * @generated from field: optional int32 e = 1;
   */
  e: number;
};

/**
 * Describes the message protobuf_unittest_import.PublicImportMessage.
 * Use `create(PublicImportMessageSchema)` to create a new message.
 */
export const PublicImportMessageSchema: GenDescMessage<PublicImportMessage> = /*@__PURE__*/
  messageDesc(file_google_protobuf_unittest_import_public, 0);

