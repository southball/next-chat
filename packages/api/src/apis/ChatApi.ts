/* tslint:disable */
/* eslint-disable */
/**
 * Chat API
 * API for southball/next-chat.
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ChatMetadata,
    ChatMetadataFromJSON,
    ChatMetadataToJSON,
    InlineResponse2001,
    InlineResponse2001FromJSON,
    InlineResponse2001ToJSON,
    Message,
    MessageFromJSON,
    MessageToJSON,
} from '../models';

export interface AddChatMessageRequest {
    chatGuid: string;
}

export interface GetChatRequest {
    chatGuid: string;
}

export interface GetChatMessagesRequest {
    chatGuid: string;
}

/**
 * 
 */
export class ChatApi extends runtime.BaseAPI {

    /**
     * Send a new message to a certain chat.
     */
    async addChatMessageRaw(requestParameters: AddChatMessageRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.chatGuid === null || requestParameters.chatGuid === undefined) {
            throw new runtime.RequiredError('chatGuid','Required parameter requestParameters.chatGuid was null or undefined when calling addChatMessage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/chat/{chat_guid}/messages`.replace(`{${"chat_guid"}}`, encodeURIComponent(String(requestParameters.chatGuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Send a new message to a certain chat.
     */
    async addChatMessage(requestParameters: AddChatMessageRequest, initOverrides?: RequestInit): Promise<void> {
        await this.addChatMessageRaw(requestParameters, initOverrides);
    }

    /**
     * Create a new chat.
     */
    async createChatRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse2001>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/chats`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2001FromJSON(jsonValue));
    }

    /**
     * Create a new chat.
     */
    async createChat(initOverrides?: RequestInit): Promise<InlineResponse2001> {
        const response = await this.createChatRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get chat metadata.
     */
    async getChatRaw(requestParameters: GetChatRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ChatMetadata>> {
        if (requestParameters.chatGuid === null || requestParameters.chatGuid === undefined) {
            throw new runtime.RequiredError('chatGuid','Required parameter requestParameters.chatGuid was null or undefined when calling getChat.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/chat/{chat_guid}`.replace(`{${"chat_guid"}}`, encodeURIComponent(String(requestParameters.chatGuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChatMetadataFromJSON(jsonValue));
    }

    /**
     * Get chat metadata.
     */
    async getChat(requestParameters: GetChatRequest, initOverrides?: RequestInit): Promise<ChatMetadata> {
        const response = await this.getChatRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get messages from a certain chat.
     */
    async getChatMessagesRaw(requestParameters: GetChatMessagesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Message>>> {
        if (requestParameters.chatGuid === null || requestParameters.chatGuid === undefined) {
            throw new runtime.RequiredError('chatGuid','Required parameter requestParameters.chatGuid was null or undefined when calling getChatMessages.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/chat/{chat_guid}/messages`.replace(`{${"chat_guid"}}`, encodeURIComponent(String(requestParameters.chatGuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MessageFromJSON));
    }

    /**
     * Get messages from a certain chat.
     */
    async getChatMessages(requestParameters: GetChatMessagesRequest, initOverrides?: RequestInit): Promise<Array<Message>> {
        const response = await this.getChatMessagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the list of chats.
     */
    async getChatsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<ChatMetadata>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/chats`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ChatMetadataFromJSON));
    }

    /**
     * Get the list of chats.
     */
    async getChats(initOverrides?: RequestInit): Promise<Array<ChatMetadata>> {
        const response = await this.getChatsRaw(initOverrides);
        return await response.value();
    }

}