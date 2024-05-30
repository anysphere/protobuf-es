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
// @generated from file google/protobuf/api.proto (package google.protobuf, syntax proto3)
/* eslint-disable */

import { proto3 } from "@bufbuild/protobuf";
import { Option, Syntax } from "./type_pb.js";
import { SourceContext } from "./source_context_pb.js";

/**
 * Api is a light-weight descriptor for an API Interface.
 *
 * Interfaces are also described as "protocol buffer services" in some contexts,
 * such as by the "service" keyword in a .proto file, but they are different
 * from API Services, which represent a concrete implementation of an interface
 * as opposed to simply a description of methods and bindings. They are also
 * sometimes simply referred to as "APIs" in other contexts, such as the name of
 * this message itself. See https://cloud.google.com/apis/design/glossary for
 * detailed terminology.
 *
 * @generated from message google.protobuf.Api
 */
export const Api = /*@__PURE__*/ proto3.makeMessageType(
  "google.protobuf.Api",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "methods", kind: "message", T: Method, repeated: true },
    { no: 3, name: "options", kind: "message", T: Option, repeated: true },
    { no: 4, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "source_context", kind: "message", T: SourceContext },
    { no: 6, name: "mixins", kind: "message", T: Mixin, repeated: true },
    { no: 7, name: "syntax", kind: "enum", T: proto3.getEnumType(Syntax) },
  ],
);

/**
 * Method represents a method of an API interface.
 *
 * @generated from message google.protobuf.Method
 */
export const Method = /*@__PURE__*/ proto3.makeMessageType(
  "google.protobuf.Method",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "request_type_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "request_streaming", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "response_type_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "response_streaming", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "options", kind: "message", T: Option, repeated: true },
    { no: 7, name: "syntax", kind: "enum", T: proto3.getEnumType(Syntax) },
  ],
);

/**
 * Declares an API Interface to be included in this interface. The including
 * interface must redeclare all the methods from the included interface, but
 * documentation and options are inherited as follows:
 *
 * - If after comment and whitespace stripping, the documentation
 *   string of the redeclared method is empty, it will be inherited
 *   from the original method.
 *
 * - Each annotation belonging to the service config (http,
 *   visibility) which is not set in the redeclared method will be
 *   inherited.
 *
 * - If an http annotation is inherited, the path pattern will be
 *   modified as follows. Any version prefix will be replaced by the
 *   version of the including interface plus the [root][] path if
 *   specified.
 *
 * Example of a simple mixin:
 *
 *     package google.acl.v1;
 *     service AccessControl {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v1/{resource=**}:getAcl";
 *       }
 *     }
 *
 *     package google.storage.v2;
 *     service Storage {
 *       rpc GetAcl(GetAclRequest) returns (Acl);
 *
 *       // Get a data record.
 *       rpc GetData(GetDataRequest) returns (Data) {
 *         option (google.api.http).get = "/v2/{resource=**}";
 *       }
 *     }
 *
 * Example of a mixin configuration:
 *
 *     apis:
 *     - name: google.storage.v2.Storage
 *       mixins:
 *       - name: google.acl.v1.AccessControl
 *
 * The mixin construct implies that all methods in `AccessControl` are
 * also declared with same name and request/response types in
 * `Storage`. A documentation generator or annotation processor will
 * see the effective `Storage.GetAcl` method after inherting
 * documentation and annotations as follows:
 *
 *     service Storage {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v2/{resource=**}:getAcl";
 *       }
 *       ...
 *     }
 *
 * Note how the version in the path pattern changed from `v1` to `v2`.
 *
 * If the `root` field in the mixin is specified, it should be a
 * relative path under which inherited HTTP paths are placed. Example:
 *
 *     apis:
 *     - name: google.storage.v2.Storage
 *       mixins:
 *       - name: google.acl.v1.AccessControl
 *         root: acls
 *
 * This implies the following inherited HTTP annotation:
 *
 *     service Storage {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v2/acls/{resource=**}:getAcl";
 *       }
 *       ...
 *     }
 *
 * @generated from message google.protobuf.Mixin
 */
export const Mixin = /*@__PURE__*/ proto3.makeMessageType(
  "google.protobuf.Mixin",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "root", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

