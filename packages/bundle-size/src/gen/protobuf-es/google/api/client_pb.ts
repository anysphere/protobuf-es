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
// @generated from file google/api/client.proto (package google.api, syntax proto3)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, MethodOptions, proto3, ServiceOptions } from "@bufbuild/protobuf";
import { LaunchStage } from "./launch_stage_pb.js";

/**
 * The organization for which the client libraries are being published.
 * Affects the url where generated docs are published, etc.
 *
 * @generated from enum google.api.ClientLibraryOrganization
 */
export enum ClientLibraryOrganization {
  /**
   * Not useful.
   *
   * @generated from enum value: CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED = 0;
   */
  CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED = 0,

  /**
   * Google Cloud Platform Org.
   *
   * @generated from enum value: CLOUD = 1;
   */
  CLOUD = 1,

  /**
   * Ads (Advertising) Org.
   *
   * @generated from enum value: ADS = 2;
   */
  ADS = 2,

  /**
   * Photos Org.
   *
   * @generated from enum value: PHOTOS = 3;
   */
  PHOTOS = 3,

  /**
   * Street View Org.
   *
   * @generated from enum value: STREET_VIEW = 4;
   */
  STREET_VIEW = 4,

  /**
   * Shopping Org.
   *
   * @generated from enum value: SHOPPING = 5;
   */
  SHOPPING = 5,

  /**
   * Geo Org.
   *
   * @generated from enum value: GEO = 6;
   */
  GEO = 6,

  /**
   * Generative AI - https://developers.generativeai.google
   *
   * @generated from enum value: GENERATIVE_AI = 7;
   */
  GENERATIVE_AI = 7,
}
// Retrieve enum metadata with: proto3.getEnumType(ClientLibraryOrganization)
proto3.util.setEnumType(ClientLibraryOrganization, "google.api.ClientLibraryOrganization", [
  { no: 0, name: "CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED" },
  { no: 1, name: "CLOUD" },
  { no: 2, name: "ADS" },
  { no: 3, name: "PHOTOS" },
  { no: 4, name: "STREET_VIEW" },
  { no: 5, name: "SHOPPING" },
  { no: 6, name: "GEO" },
  { no: 7, name: "GENERATIVE_AI" },
]);

/**
 * To where should client libraries be published?
 *
 * @generated from enum google.api.ClientLibraryDestination
 */
export enum ClientLibraryDestination {
  /**
   * Client libraries will neither be generated nor published to package
   * managers.
   *
   * @generated from enum value: CLIENT_LIBRARY_DESTINATION_UNSPECIFIED = 0;
   */
  CLIENT_LIBRARY_DESTINATION_UNSPECIFIED = 0,

  /**
   * Generate the client library in a repo under github.com/googleapis,
   * but don't publish it to package managers.
   *
   * @generated from enum value: GITHUB = 10;
   */
  GITHUB = 10,

  /**
   * Publish the library to package managers like nuget.org and npmjs.com.
   *
   * @generated from enum value: PACKAGE_MANAGER = 20;
   */
  PACKAGE_MANAGER = 20,
}
// Retrieve enum metadata with: proto3.getEnumType(ClientLibraryDestination)
proto3.util.setEnumType(ClientLibraryDestination, "google.api.ClientLibraryDestination", [
  { no: 0, name: "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED" },
  { no: 10, name: "GITHUB" },
  { no: 20, name: "PACKAGE_MANAGER" },
]);

/**
 * Required information for every language.
 *
 * @generated from message google.api.CommonLanguageSettings
 */
export class CommonLanguageSettings extends Message<CommonLanguageSettings> {
  /**
   * Link to automatically generated reference documentation.  Example:
   * https://cloud.google.com/nodejs/docs/reference/asset/latest
   *
   * @generated from field: string reference_docs_uri = 1 [deprecated = true];
   * @deprecated
   */
  referenceDocsUri = "";

  /**
   * The destination where API teams want this client library to be published.
   *
   * @generated from field: repeated google.api.ClientLibraryDestination destinations = 2;
   */
  destinations: ClientLibraryDestination[] = [];

  constructor(data?: PartialMessage<CommonLanguageSettings>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.CommonLanguageSettings";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "reference_docs_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "destinations", kind: "enum", T: proto3.getEnumType(ClientLibraryDestination), repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommonLanguageSettings {
    return new CommonLanguageSettings().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommonLanguageSettings {
    return new CommonLanguageSettings().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommonLanguageSettings {
    return new CommonLanguageSettings().fromJsonString(jsonString, options);
  }

  static equals(a: CommonLanguageSettings | PlainMessage<CommonLanguageSettings> | undefined, b: CommonLanguageSettings | PlainMessage<CommonLanguageSettings> | undefined): boolean {
    return proto3.util.equals(CommonLanguageSettings, a, b);
  }
}

/**
 * Details about how and where to publish client libraries.
 *
 * @generated from message google.api.ClientLibrarySettings
 */
export class ClientLibrarySettings extends Message<ClientLibrarySettings> {
  /**
   * Version of the API to apply these settings to. This is the full protobuf
   * package for the API, ending in the version element.
   * Examples: "google.cloud.speech.v1" and "google.spanner.admin.database.v1".
   *
   * @generated from field: string version = 1;
   */
  version = "";

  /**
   * Launch stage of this version of the API.
   *
   * @generated from field: google.api.LaunchStage launch_stage = 2;
   */
  launchStage = LaunchStage.LAUNCH_STAGE_UNSPECIFIED;

  /**
   * When using transport=rest, the client request will encode enums as
   * numbers rather than strings.
   *
   * @generated from field: bool rest_numeric_enums = 3;
   */
  restNumericEnums = false;

  /**
   * Settings for legacy Java features, supported in the Service YAML.
   *
   * @generated from field: google.api.JavaSettings java_settings = 21;
   */
  javaSettings?: JavaSettings;

  /**
   * Settings for C++ client libraries.
   *
   * @generated from field: google.api.CppSettings cpp_settings = 22;
   */
  cppSettings?: CppSettings;

  /**
   * Settings for PHP client libraries.
   *
   * @generated from field: google.api.PhpSettings php_settings = 23;
   */
  phpSettings?: PhpSettings;

  /**
   * Settings for Python client libraries.
   *
   * @generated from field: google.api.PythonSettings python_settings = 24;
   */
  pythonSettings?: PythonSettings;

  /**
   * Settings for Node client libraries.
   *
   * @generated from field: google.api.NodeSettings node_settings = 25;
   */
  nodeSettings?: NodeSettings;

  /**
   * Settings for .NET client libraries.
   *
   * @generated from field: google.api.DotnetSettings dotnet_settings = 26;
   */
  dotnetSettings?: DotnetSettings;

  /**
   * Settings for Ruby client libraries.
   *
   * @generated from field: google.api.RubySettings ruby_settings = 27;
   */
  rubySettings?: RubySettings;

  /**
   * Settings for Go client libraries.
   *
   * @generated from field: google.api.GoSettings go_settings = 28;
   */
  goSettings?: GoSettings;

  constructor(data?: PartialMessage<ClientLibrarySettings>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.ClientLibrarySettings";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "launch_stage", kind: "enum", T: proto3.getEnumType(LaunchStage) },
    { no: 3, name: "rest_numeric_enums", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 21, name: "java_settings", kind: "message", T: JavaSettings },
    { no: 22, name: "cpp_settings", kind: "message", T: CppSettings },
    { no: 23, name: "php_settings", kind: "message", T: PhpSettings },
    { no: 24, name: "python_settings", kind: "message", T: PythonSettings },
    { no: 25, name: "node_settings", kind: "message", T: NodeSettings },
    { no: 26, name: "dotnet_settings", kind: "message", T: DotnetSettings },
    { no: 27, name: "ruby_settings", kind: "message", T: RubySettings },
    { no: 28, name: "go_settings", kind: "message", T: GoSettings },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientLibrarySettings {
    return new ClientLibrarySettings().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientLibrarySettings {
    return new ClientLibrarySettings().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientLibrarySettings {
    return new ClientLibrarySettings().fromJsonString(jsonString, options);
  }

  static equals(a: ClientLibrarySettings | PlainMessage<ClientLibrarySettings> | undefined, b: ClientLibrarySettings | PlainMessage<ClientLibrarySettings> | undefined): boolean {
    return proto3.util.equals(ClientLibrarySettings, a, b);
  }
}

/**
 * This message configures the settings for publishing [Google Cloud Client
 * libraries](https://cloud.google.com/apis/docs/cloud-client-libraries)
 * generated from the service config.
 *
 * @generated from message google.api.Publishing
 */
export class Publishing extends Message<Publishing> {
  /**
   * A list of API method settings, e.g. the behavior for methods that use the
   * long-running operation pattern.
   *
   * @generated from field: repeated google.api.MethodSettings method_settings = 2;
   */
  methodSettings: MethodSettings[] = [];

  /**
   * Link to a *public* URI where users can report issues.  Example:
   * https://issuetracker.google.com/issues/new?component=190865&template=1161103
   *
   * @generated from field: string new_issue_uri = 101;
   */
  newIssueUri = "";

  /**
   * Link to product home page.  Example:
   * https://cloud.google.com/asset-inventory/docs/overview
   *
   * @generated from field: string documentation_uri = 102;
   */
  documentationUri = "";

  /**
   * Used as a tracking tag when collecting data about the APIs developer
   * relations artifacts like docs, packages delivered to package managers,
   * etc.  Example: "speech".
   *
   * @generated from field: string api_short_name = 103;
   */
  apiShortName = "";

  /**
   * GitHub label to apply to issues and pull requests opened for this API.
   *
   * @generated from field: string github_label = 104;
   */
  githubLabel = "";

  /**
   * GitHub teams to be added to CODEOWNERS in the directory in GitHub
   * containing source code for the client libraries for this API.
   *
   * @generated from field: repeated string codeowner_github_teams = 105;
   */
  codeownerGithubTeams: string[] = [];

  /**
   * A prefix used in sample code when demarking regions to be included in
   * documentation.
   *
   * @generated from field: string doc_tag_prefix = 106;
   */
  docTagPrefix = "";

  /**
   * For whom the client library is being published.
   *
   * @generated from field: google.api.ClientLibraryOrganization organization = 107;
   */
  organization = ClientLibraryOrganization.CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED;

  /**
   * Client library settings.  If the same version string appears multiple
   * times in this list, then the last one wins.  Settings from earlier
   * settings with the same version string are discarded.
   *
   * @generated from field: repeated google.api.ClientLibrarySettings library_settings = 109;
   */
  librarySettings: ClientLibrarySettings[] = [];

  /**
   * Optional link to proto reference documentation.  Example:
   * https://cloud.google.com/pubsub/lite/docs/reference/rpc
   *
   * @generated from field: string proto_reference_documentation_uri = 110;
   */
  protoReferenceDocumentationUri = "";

  /**
   * Optional link to REST reference documentation.  Example:
   * https://cloud.google.com/pubsub/lite/docs/reference/rest
   *
   * @generated from field: string rest_reference_documentation_uri = 111;
   */
  restReferenceDocumentationUri = "";

  constructor(data?: PartialMessage<Publishing>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.Publishing";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "method_settings", kind: "message", T: MethodSettings, repeated: true },
    { no: 101, name: "new_issue_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 102, name: "documentation_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 103, name: "api_short_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 104, name: "github_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 105, name: "codeowner_github_teams", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 106, name: "doc_tag_prefix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 107, name: "organization", kind: "enum", T: proto3.getEnumType(ClientLibraryOrganization) },
    { no: 109, name: "library_settings", kind: "message", T: ClientLibrarySettings, repeated: true },
    { no: 110, name: "proto_reference_documentation_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 111, name: "rest_reference_documentation_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Publishing {
    return new Publishing().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Publishing {
    return new Publishing().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Publishing {
    return new Publishing().fromJsonString(jsonString, options);
  }

  static equals(a: Publishing | PlainMessage<Publishing> | undefined, b: Publishing | PlainMessage<Publishing> | undefined): boolean {
    return proto3.util.equals(Publishing, a, b);
  }
}

/**
 * Settings for Java client libraries.
 *
 * @generated from message google.api.JavaSettings
 */
export class JavaSettings extends Message<JavaSettings> {
  /**
   * The package name to use in Java. Clobbers the java_package option
   * set in the protobuf. This should be used **only** by APIs
   * who have already set the language_settings.java.package_name" field
   * in gapic.yaml. API teams should use the protobuf java_package option
   * where possible.
   *
   * Example of a YAML configuration::
   *
   *  publishing:
   *    java_settings:
   *      library_package: com.google.cloud.pubsub.v1
   *
   * @generated from field: string library_package = 1;
   */
  libraryPackage = "";

  /**
   * Configure the Java class name to use instead of the service's for its
   * corresponding generated GAPIC client. Keys are fully-qualified
   * service names as they appear in the protobuf (including the full
   * the language_settings.java.interface_names" field in gapic.yaml. API
   * teams should otherwise use the service name as it appears in the
   * protobuf.
   *
   * Example of a YAML configuration::
   *
   *  publishing:
   *    java_settings:
   *      service_class_names:
   *        - google.pubsub.v1.Publisher: TopicAdmin
   *        - google.pubsub.v1.Subscriber: SubscriptionAdmin
   *
   * @generated from field: map<string, string> service_class_names = 2;
   */
  serviceClassNames: { [key: string]: string } = {};

  /**
   * Some settings.
   *
   * @generated from field: google.api.CommonLanguageSettings common = 3;
   */
  common?: CommonLanguageSettings;

  constructor(data?: PartialMessage<JavaSettings>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.JavaSettings";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "library_package", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "service_class_names", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 3, name: "common", kind: "message", T: CommonLanguageSettings },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JavaSettings {
    return new JavaSettings().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JavaSettings {
    return new JavaSettings().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JavaSettings {
    return new JavaSettings().fromJsonString(jsonString, options);
  }

  static equals(a: JavaSettings | PlainMessage<JavaSettings> | undefined, b: JavaSettings | PlainMessage<JavaSettings> | undefined): boolean {
    return proto3.util.equals(JavaSettings, a, b);
  }
}

/**
 * Settings for C++ client libraries.
 *
 * @generated from message google.api.CppSettings
 */
export class CppSettings extends Message<CppSettings> {
  /**
   * Some settings.
   *
   * @generated from field: google.api.CommonLanguageSettings common = 1;
   */
  common?: CommonLanguageSettings;

  constructor(data?: PartialMessage<CppSettings>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.CppSettings";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "common", kind: "message", T: CommonLanguageSettings },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CppSettings {
    return new CppSettings().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CppSettings {
    return new CppSettings().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CppSettings {
    return new CppSettings().fromJsonString(jsonString, options);
  }

  static equals(a: CppSettings | PlainMessage<CppSettings> | undefined, b: CppSettings | PlainMessage<CppSettings> | undefined): boolean {
    return proto3.util.equals(CppSettings, a, b);
  }
}

/**
 * Settings for Php client libraries.
 *
 * @generated from message google.api.PhpSettings
 */
export class PhpSettings extends Message<PhpSettings> {
  /**
   * Some settings.
   *
   * @generated from field: google.api.CommonLanguageSettings common = 1;
   */
  common?: CommonLanguageSettings;

  constructor(data?: PartialMessage<PhpSettings>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.PhpSettings";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "common", kind: "message", T: CommonLanguageSettings },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PhpSettings {
    return new PhpSettings().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PhpSettings {
    return new PhpSettings().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PhpSettings {
    return new PhpSettings().fromJsonString(jsonString, options);
  }

  static equals(a: PhpSettings | PlainMessage<PhpSettings> | undefined, b: PhpSettings | PlainMessage<PhpSettings> | undefined): boolean {
    return proto3.util.equals(PhpSettings, a, b);
  }
}

/**
 * Settings for Python client libraries.
 *
 * @generated from message google.api.PythonSettings
 */
export class PythonSettings extends Message<PythonSettings> {
  /**
   * Some settings.
   *
   * @generated from field: google.api.CommonLanguageSettings common = 1;
   */
  common?: CommonLanguageSettings;

  constructor(data?: PartialMessage<PythonSettings>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.PythonSettings";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "common", kind: "message", T: CommonLanguageSettings },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PythonSettings {
    return new PythonSettings().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PythonSettings {
    return new PythonSettings().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PythonSettings {
    return new PythonSettings().fromJsonString(jsonString, options);
  }

  static equals(a: PythonSettings | PlainMessage<PythonSettings> | undefined, b: PythonSettings | PlainMessage<PythonSettings> | undefined): boolean {
    return proto3.util.equals(PythonSettings, a, b);
  }
}

/**
 * Settings for Node client libraries.
 *
 * @generated from message google.api.NodeSettings
 */
export class NodeSettings extends Message<NodeSettings> {
  /**
   * Some settings.
   *
   * @generated from field: google.api.CommonLanguageSettings common = 1;
   */
  common?: CommonLanguageSettings;

  constructor(data?: PartialMessage<NodeSettings>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.NodeSettings";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "common", kind: "message", T: CommonLanguageSettings },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NodeSettings {
    return new NodeSettings().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NodeSettings {
    return new NodeSettings().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NodeSettings {
    return new NodeSettings().fromJsonString(jsonString, options);
  }

  static equals(a: NodeSettings | PlainMessage<NodeSettings> | undefined, b: NodeSettings | PlainMessage<NodeSettings> | undefined): boolean {
    return proto3.util.equals(NodeSettings, a, b);
  }
}

/**
 * Settings for Dotnet client libraries.
 *
 * @generated from message google.api.DotnetSettings
 */
export class DotnetSettings extends Message<DotnetSettings> {
  /**
   * Some settings.
   *
   * @generated from field: google.api.CommonLanguageSettings common = 1;
   */
  common?: CommonLanguageSettings;

  /**
   * Map from original service names to renamed versions.
   * This is used when the default generated types
   * would cause a naming conflict. (Neither name is
   * fully-qualified.)
   * Example: Subscriber to SubscriberServiceApi.
   *
   * @generated from field: map<string, string> renamed_services = 2;
   */
  renamedServices: { [key: string]: string } = {};

  /**
   * Map from full resource types to the effective short name
   * for the resource. This is used when otherwise resource
   * named from different services would cause naming collisions.
   * Example entry:
   * "datalabeling.googleapis.com/Dataset": "DataLabelingDataset"
   *
   * @generated from field: map<string, string> renamed_resources = 3;
   */
  renamedResources: { [key: string]: string } = {};

  /**
   * List of full resource types to ignore during generation.
   * This is typically used for API-specific Location resources,
   * which should be handled by the generator as if they were actually
   * the common Location resources.
   * Example entry: "documentai.googleapis.com/Location"
   *
   * @generated from field: repeated string ignored_resources = 4;
   */
  ignoredResources: string[] = [];

  /**
   * Namespaces which must be aliased in snippets due to
   * a known (but non-generator-predictable) naming collision
   *
   * @generated from field: repeated string forced_namespace_aliases = 5;
   */
  forcedNamespaceAliases: string[] = [];

  /**
   * Method signatures (in the form "service.method(signature)")
   * which are provided separately, so shouldn't be generated.
   * Snippets *calling* these methods are still generated, however.
   *
   * @generated from field: repeated string handwritten_signatures = 6;
   */
  handwrittenSignatures: string[] = [];

  constructor(data?: PartialMessage<DotnetSettings>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.DotnetSettings";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "common", kind: "message", T: CommonLanguageSettings },
    { no: 2, name: "renamed_services", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 3, name: "renamed_resources", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 4, name: "ignored_resources", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "forced_namespace_aliases", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "handwritten_signatures", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DotnetSettings {
    return new DotnetSettings().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DotnetSettings {
    return new DotnetSettings().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DotnetSettings {
    return new DotnetSettings().fromJsonString(jsonString, options);
  }

  static equals(a: DotnetSettings | PlainMessage<DotnetSettings> | undefined, b: DotnetSettings | PlainMessage<DotnetSettings> | undefined): boolean {
    return proto3.util.equals(DotnetSettings, a, b);
  }
}

/**
 * Settings for Ruby client libraries.
 *
 * @generated from message google.api.RubySettings
 */
export class RubySettings extends Message<RubySettings> {
  /**
   * Some settings.
   *
   * @generated from field: google.api.CommonLanguageSettings common = 1;
   */
  common?: CommonLanguageSettings;

  constructor(data?: PartialMessage<RubySettings>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.RubySettings";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "common", kind: "message", T: CommonLanguageSettings },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RubySettings {
    return new RubySettings().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RubySettings {
    return new RubySettings().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RubySettings {
    return new RubySettings().fromJsonString(jsonString, options);
  }

  static equals(a: RubySettings | PlainMessage<RubySettings> | undefined, b: RubySettings | PlainMessage<RubySettings> | undefined): boolean {
    return proto3.util.equals(RubySettings, a, b);
  }
}

/**
 * Settings for Go client libraries.
 *
 * @generated from message google.api.GoSettings
 */
export class GoSettings extends Message<GoSettings> {
  /**
   * Some settings.
   *
   * @generated from field: google.api.CommonLanguageSettings common = 1;
   */
  common?: CommonLanguageSettings;

  constructor(data?: PartialMessage<GoSettings>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.GoSettings";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "common", kind: "message", T: CommonLanguageSettings },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoSettings {
    return new GoSettings().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoSettings {
    return new GoSettings().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoSettings {
    return new GoSettings().fromJsonString(jsonString, options);
  }

  static equals(a: GoSettings | PlainMessage<GoSettings> | undefined, b: GoSettings | PlainMessage<GoSettings> | undefined): boolean {
    return proto3.util.equals(GoSettings, a, b);
  }
}

/**
 * Describes the generator configuration for a method.
 *
 * @generated from message google.api.MethodSettings
 */
export class MethodSettings extends Message<MethodSettings> {
  /**
   * The fully qualified name of the method, for which the options below apply.
   * This is used to find the method to apply the options.
   *
   * @generated from field: string selector = 1;
   */
  selector = "";

  /**
   * Describes settings to use for long-running operations when generating
   * API methods for RPCs. Complements RPCs that use the annotations in
   * google/longrunning/operations.proto.
   *
   * Example of a YAML configuration::
   *
   *  publishing:
   *    method_settings:
   *      - selector: google.cloud.speech.v2.Speech.BatchRecognize
   *        long_running:
   *          initial_poll_delay:
   *            seconds: 60 # 1 minute
   *          poll_delay_multiplier: 1.5
   *          max_poll_delay:
   *            seconds: 360 # 6 minutes
   *          total_poll_timeout:
   *             seconds: 54000 # 90 minutes
   *
   * @generated from field: google.api.MethodSettings.LongRunning long_running = 2;
   */
  longRunning?: MethodSettings_LongRunning;

  /**
   * List of top-level fields of the request message, that should be
   * automatically populated by the client libraries based on their
   * (google.api.field_info).format. Currently supported format: UUID4.
   *
   * Example of a YAML configuration:
   *
   *  publishing:
   *    method_settings:
   *      - selector: google.example.v1.ExampleService.CreateExample
   *        auto_populated_fields:
   *        - request_id
   *
   * @generated from field: repeated string auto_populated_fields = 3;
   */
  autoPopulatedFields: string[] = [];

  constructor(data?: PartialMessage<MethodSettings>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.MethodSettings";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "selector", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "long_running", kind: "message", T: MethodSettings_LongRunning },
    { no: 3, name: "auto_populated_fields", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MethodSettings {
    return new MethodSettings().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MethodSettings {
    return new MethodSettings().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MethodSettings {
    return new MethodSettings().fromJsonString(jsonString, options);
  }

  static equals(a: MethodSettings | PlainMessage<MethodSettings> | undefined, b: MethodSettings | PlainMessage<MethodSettings> | undefined): boolean {
    return proto3.util.equals(MethodSettings, a, b);
  }
}

/**
 * Describes settings to use when generating API methods that use the
 * long-running operation pattern.
 * All default values below are from those used in the client library
 * generators (e.g.
 * [Java](https://github.com/googleapis/gapic-generator-java/blob/04c2faa191a9b5a10b92392fe8482279c4404803/src/main/java/com/google/api/generator/gapic/composer/common/RetrySettingsComposer.java)).
 *
 * @generated from message google.api.MethodSettings.LongRunning
 */
export class MethodSettings_LongRunning extends Message<MethodSettings_LongRunning> {
  /**
   * Initial delay after which the first poll request will be made.
   * Default value: 5 seconds.
   *
   * @generated from field: google.protobuf.Duration initial_poll_delay = 1;
   */
  initialPollDelay?: Duration;

  /**
   * Multiplier to gradually increase delay between subsequent polls until it
   * reaches max_poll_delay.
   * Default value: 1.5.
   *
   * @generated from field: float poll_delay_multiplier = 2;
   */
  pollDelayMultiplier = 0;

  /**
   * Maximum time between two subsequent poll requests.
   * Default value: 45 seconds.
   *
   * @generated from field: google.protobuf.Duration max_poll_delay = 3;
   */
  maxPollDelay?: Duration;

  /**
   * Total polling timeout.
   * Default value: 5 minutes.
   *
   * @generated from field: google.protobuf.Duration total_poll_timeout = 4;
   */
  totalPollTimeout?: Duration;

  constructor(data?: PartialMessage<MethodSettings_LongRunning>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.MethodSettings.LongRunning";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "initial_poll_delay", kind: "message", T: Duration },
    { no: 2, name: "poll_delay_multiplier", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 3, name: "max_poll_delay", kind: "message", T: Duration },
    { no: 4, name: "total_poll_timeout", kind: "message", T: Duration },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MethodSettings_LongRunning {
    return new MethodSettings_LongRunning().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MethodSettings_LongRunning {
    return new MethodSettings_LongRunning().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MethodSettings_LongRunning {
    return new MethodSettings_LongRunning().fromJsonString(jsonString, options);
  }

  static equals(a: MethodSettings_LongRunning | PlainMessage<MethodSettings_LongRunning> | undefined, b: MethodSettings_LongRunning | PlainMessage<MethodSettings_LongRunning> | undefined): boolean {
    return proto3.util.equals(MethodSettings_LongRunning, a, b);
  }
}

/**
 * A definition of a client library method signature.
 *
 * In client libraries, each proto RPC corresponds to one or more methods
 * which the end user is able to call, and calls the underlying RPC.
 * Normally, this method receives a single argument (a struct or instance
 * corresponding to the RPC request object). Defining this field will
 * add one or more overloads providing flattened or simpler method signatures
 * in some languages.
 *
 * The fields on the method signature are provided as a comma-separated
 * string.
 *
 * For example, the proto RPC and annotation:
 *
 *   rpc CreateSubscription(CreateSubscriptionRequest)
 *       returns (Subscription) {
 *     option (google.api.method_signature) = "name,topic";
 *   }
 *
 * Would add the following Java overload (in addition to the method accepting
 * the request object):
 *
 *   public final Subscription createSubscription(String name, String topic)
 *
 * The following backwards-compatibility guidelines apply:
 *
 *   * Adding this annotation to an unannotated method is backwards
 *     compatible.
 *   * Adding this annotation to a method which already has existing
 *     method signature annotations is backwards compatible if and only if
 *     the new method signature annotation is last in the sequence.
 *   * Modifying or removing an existing method signature annotation is
 *     a breaking change.
 *   * Re-ordering existing method signature annotations is a breaking
 *     change.
 *
 * @generated from extension: repeated string method_signature = 1051;
 */
export const method_signature = proto3.makeExtension<MethodOptions, string[]>(
  "google.api.method_signature", 
  MethodOptions, 
  { no: 1051, kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
);

/**
 * The hostname for this service.
 * This should be specified with no prefix or protocol.
 *
 * Example:
 *
 *   service Foo {
 *     option (google.api.default_host) = "foo.googleapi.com";
 *     ...
 *   }
 *
 * @generated from extension: string default_host = 1049;
 */
export const default_host = proto3.makeExtension<ServiceOptions, string>(
  "google.api.default_host", 
  ServiceOptions, 
  { no: 1049, kind: "scalar", T: 9 /* ScalarType.STRING */ },
);

/**
 * OAuth scopes needed for the client.
 *
 * Example:
 *
 *   service Foo {
 *     option (google.api.oauth_scopes) = \
 *       "https://www.googleapis.com/auth/cloud-platform";
 *     ...
 *   }
 *
 * If there is more than one scope, use a comma-separated string:
 *
 * Example:
 *
 *   service Foo {
 *     option (google.api.oauth_scopes) = \
 *       "https://www.googleapis.com/auth/cloud-platform,"
 *       "https://www.googleapis.com/auth/monitoring";
 *     ...
 *   }
 *
 * @generated from extension: string oauth_scopes = 1050;
 */
export const oauth_scopes = proto3.makeExtension<ServiceOptions, string>(
  "google.api.oauth_scopes", 
  ServiceOptions, 
  { no: 1050, kind: "scalar", T: 9 /* ScalarType.STRING */ },
);

/**
 * The API version of this service, which should be sent by version-aware
 * clients to the service. This allows services to abide by the schema and
 * behavior of the service at the time this API version was deployed.
 * The format of the API version must be treated as opaque by clients.
 * Services may use a format with an apparent structure, but clients must
 * not rely on this to determine components within an API version, or attempt
 * to construct other valid API versions. Note that this is for upcoming
 * functionality and may not be implemented for all services.
 *
 * Example:
 *
 *   service Foo {
 *     option (google.api.api_version) = "v1_20230821_preview";
 *   }
 *
 * @generated from extension: string api_version = 525000001;
 */
export const api_version = proto3.makeExtension<ServiceOptions, string>(
  "google.api.api_version", 
  ServiceOptions, 
  { no: 525000001, kind: "scalar", T: 9 /* ScalarType.STRING */ },
);

