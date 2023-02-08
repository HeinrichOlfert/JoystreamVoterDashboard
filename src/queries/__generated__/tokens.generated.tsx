import * as Types from './baseTypes.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export type GetMintedTokenQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.RewardPaymentEventWhereInput>;
}>;

export type GetWorkingGroupsTokenVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.NftBoughtEventWhereInput>;
}>;

export type GetCouncilTokenVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.BudgetRefillEventWhereInput>;
}>;

export type GetMintedTokenCountQuery = { __typename: 'Query', rewardPaymentEvents: Array<{ __typename: 'RewardPaymentEvent', paidBalance: number }> };

export type GetWorkingGroupTokenQuery = { __typename: 'Query', budgetUpdatedEvents: Array<{ __typename: 'BudgetUpdatedEvent', budgetChangeAmount: number, groupId: string }> };

export type GetCouncilTokenQuery = { __typename: 'Query', budgetRefillEvents: Array<{ __typename: 'BudgetRefillEvent', balance: number }> };


export const GetMintedTokenCountDocument = gql`
query mintedTokens($where:RewardPaymentEventWhereInput) {
  rewardPaymentEvents(where: $where, limit:1000) {
    inBlock
    councilMemberId
    id
    paidBalance
    missingBalance
    councilMember {
      electedInCouncilId
      member {
        id
      }
    }
  }
}
    `;

/**
 * __useGetMintedTokenCountQuery__
 *
 * To run a query within a React component, call `useGetMintedTokenCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMintedTokenCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMintedTokenCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetMintedTokenCountQuery(baseOptions?: Apollo.QueryHookOptions<GetMintedTokenCountQuery, GetMintedTokenQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetMintedTokenCountQuery, GetMintedTokenQueryVariables>(GetMintedTokenCountDocument, options);
}
export function useGetMintedTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMintedTokenCountQuery, GetMintedTokenQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetMintedTokenCountQuery, GetMintedTokenQueryVariables>(GetMintedTokenCountDocument, options);
}
export type GetMintedTokenCountQueryHookResult = ReturnType<typeof useGetMintedTokenCountQuery>;
export type GetMintedTokenLazyQueryHookResult = ReturnType<typeof useGetMintedTokenLazyQuery>;
export type GetMintedTokenQueryResult = Apollo.QueryResult<GetMintedTokenCountQuery, GetMintedTokenQueryVariables>;


export const GetWorkingGroupTokenDocument = gql`

query workingGroupToken($where:BudgetUpdatedEventWhereInput) {
  budgetUpdatedEvents(where:$where, limit:1000) {
    
    groupId
    budgetChangeAmount
    inBlock
    id
  }
}
    `;

/**
 * __useGetNftSaleCountQuery__
 *
 * To run a query within a React component, call `useGetNftSaleCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNftSaleCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNftSaleCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetWorkingGroupTokenQuery(baseOptions?: Apollo.QueryHookOptions<GetWorkingGroupTokenQuery, GetWorkingGroupsTokenVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetWorkingGroupTokenQuery, GetWorkingGroupsTokenVariables>(GetWorkingGroupTokenDocument, options);
}
export function useGetWorkingGroupTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkingGroupTokenQuery, GetWorkingGroupsTokenVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetWorkingGroupTokenQuery, GetWorkingGroupsTokenVariables>(GetWorkingGroupTokenDocument, options);
}
export type GetWorkingGroupTokenQueryHookResult = ReturnType<typeof useGetWorkingGroupTokenQuery>;
export type GetWorkingGropupLazyQueryHookResult = ReturnType<typeof useGetWorkingGroupTokenLazyQuery>;
export type GetWorkingGroupTokenQueryResult = Apollo.QueryResult<GetWorkingGroupTokenQueryHookResult, GetWorkingGroupsTokenVariables>;


export const GetCouncilDocument = gql`

query councilTokens ($where:BudgetRefillEventWhereInput){
  budgetRefillEvents(where: $where, limit:1000) {
    id
    balance
    inBlock
  }
}
    `;

export function useGetCouncilTokenQuery(baseOptions?: Apollo.QueryHookOptions<GetCouncilTokenQuery, GetCouncilTokenVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCouncilTokenQuery, GetCouncilTokenVariables>(GetCouncilDocument, options);
}
export function useGetCouncilTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCouncilTokenQuery, GetCouncilTokenVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCouncilTokenQuery, GetCouncilTokenVariables>(GetCouncilDocument, options);
}
export type GetCouncilQueryHookResult = ReturnType<typeof useGetCouncilTokenQuery>;
export type GetCouncilLazyQueryHookResult = ReturnType<typeof useGetCouncilTokenLazyQuery>;
export type GetCouncilQueryResult = Apollo.QueryResult<GetCouncilTokenQuery, GetCouncilTokenVariables>;