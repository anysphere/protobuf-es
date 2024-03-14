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

// @generated by protoc-gen-es v1.8.0 with parameter "bootstrap_wkt=true,ts_nocheck=false,target=ts"
// @generated from file google/protobuf/api.proto (package google.protobuf, syntax proto3)
/* eslint-disable */

import type { PartialMessage, PlainMessage } from "../../message.js";
import { Message } from "../../message.js";
import { Option, Syntax } from "./type_pb.js";
import { SourceContext } from "./source_context_pb.js";
import { proto3 } from "../../proto3.js";
import type { FieldList } from "../../field-list.js";
import type { BinaryReadOptions } from "../../binary-format.js";
import type { JsonReadOptions, JsonValue } from "../../json-format.js";

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
export class Api extends Message<Api> {
  /**
   * The fully qualified name of this interface, including package name
   * followed by the interface's simple name.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * The methods of this interface, in unspecified order.
   *
   * @generated from field: repeated google.protobuf.Method methods = 2;
   */
  methods: Method[] = [];

  /**
   * Any metadata attached to the interface.
   *
   * @generated from field: repeated google.protobuf.Option options = 3;
   */
  options: Option[] = [];

  /**
   * A version string for this interface. If specified, must have the form
   * `major-version.minor-version`, as in `1.10`. If the minor version is
   * omitted, it defaults to zero. If the entire version field is empty, the
   * major version is derived from the package name, as outlined below. If the
   * field is not empty, the version in the package name will be verified to be
   * consistent with what is provided here.
   *
   * The versioning schema uses [semantic
   * versioning](http://semver.org) where the major version number
   * indicates a breaking change and the minor version an additive,
   * non-breaking change. Both version numbers are signals to users
   * what to expect from different versions, and should be carefully
   * chosen based on the product plan.
   *
   * The major version is also reflected in the package name of the
   * interface, which must end in `v<major-version>`, as in
   * `google.feature.v1`. For major versions 0 and 1, the suffix can
   * be omitted. Zero major versions must only be used for
   * experimental, non-GA interfaces.
   *
   *
   * @generated from field: string version = 4;
   */
  version = "";

  /**
   * Source context for the protocol buffer service represented by this
   * message.
   *
   * @generated from field: google.protobuf.SourceContext source_context = 5;
   */
  sourceContext?: SourceContext;

  /**
   * Included interfaces. See [Mixin][].
   *
   * @generated from field: repeated google.protobuf.Mixin mixins = 6;
   */
  mixins: Mixin[] = [];

  /**
   * The source syntax of the service.
   *
   * @generated from field: google.protobuf.Syntax syntax = 7;
   */
  syntax = Syntax.PROTO2;

  constructor(data?: PartialMessage<Api>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.protobuf.Api";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "methods", kind: "message", T: Method, repeated: true },
    { no: 3, name: "options", kind: "message", T: Option, repeated: true },
    { no: 4, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "source_context", kind: "message", T: SourceContext },
    { no: 6, name: "mixins", kind: "message", T: Mixin, repeated: true },
    { no: 7, name: "syntax", kind: "enum", T: proto3.getEnumType(Syntax) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Api {
    return new Api().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Api {
    return new Api().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Api {
    return new Api().fromJsonString(jsonString, options);
  }

  static equals(a: Api | PlainMessage<Api> | undefined, b: Api | PlainMessage<Api> | undefined): boolean {
    return proto3.util.equals(Api, a, b);
  }
}

/**
 * Method represents a method of an API interface.
 *
 * @generated from message google.protobuf.Method
 */
export class Method extends Message<Method> {
  /**
   * The simple name of this method.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * A URL of the input message type.
   *
   * @generated from field: string request_type_url = 2;
   */
  requestTypeUrl = "";

  /**
   * If true, the request is streamed.
   *
   * @generated from field: bool request_streaming = 3;
   */
  requestStreaming = false;

  /**
   * The URL of the output message type.
   *
   * @generated from field: string response_type_url = 4;
   */
  responseTypeUrl = "";

  /**
   * If true, the response is streamed.
   *
   * @generated from field: bool response_streaming = 5;
   */
  responseStreaming = false;

  /**
   * Any metadata attached to the method.
   *
   * @generated from field: repeated google.protobuf.Option options = 6;
   */
  options: Option[] = [];

  /**
   * The source syntax of this method.
   *
   * @generated from field: google.protobuf.Syntax syntax = 7;
   */
  syntax = Syntax.PROTO2;

  constructor(data?: PartialMessage<Method>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.protobuf.Method";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "request_type_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "request_streaming", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "response_type_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "response_streaming", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "options", kind: "message", T: Option, repeated: true },
    { no: 7, name: "syntax", kind: "enum", T: proto3.getEnumType(Syntax) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Method {
    return new Method().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Method {
    return new Method().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Method {
    return new Method().fromJsonString(jsonString, options);
  }

  static equals(a: Method | PlainMessage<Method> | undefined, b: Method | PlainMessage<Method> | undefined): boolean {
    return proto3.util.equals(Method, a, b);
  }
}

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
export class Mixin extends Message<Mixin> {
  /**
   * The fully qualified name of the interface which is included.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * If non-empty specifies a path under which inherited HTTP paths
   * are rooted.
   *
   * @generated from field: string root = 2;
   */
  root = "";

  constructor(data?: PartialMessage<Mixin>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.protobuf.Mixin";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "root", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Mixin {
    return new Mixin().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Mixin {
    return new Mixin().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Mixin {
    return new Mixin().fromJsonString(jsonString, options);
  }

  static equals(a: Mixin | PlainMessage<Mixin> | undefined, b: Mixin | PlainMessage<Mixin> | undefined): boolean {
    return proto3.util.equals(Mixin, a, b);
  }
}

