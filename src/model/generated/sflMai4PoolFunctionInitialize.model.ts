import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class SflMai4PoolFunctionInitialize {
    constructor(props?: Partial<SflMai4PoolFunctionInitialize>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("int4", {nullable: false})
    blockNumber!: number

    @Index_()
    @Column_("text", {nullable: false})
    transactionHash!: string

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Column_("text", {nullable: false})
    contract!: string

    @Index_()
    @Column_("text", {nullable: false})
    name!: string

    @Column_("jsonb", {nullable: true})
    pooledTokens!: unknown | undefined | null

    @Column_("jsonb", {nullable: true})
    decimals!: unknown | undefined | null

    @Column_("text", {nullable: true})
    lpTokenName!: string | undefined | null

    @Column_("text", {nullable: true})
    lpTokenSymbol!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    a!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    fee!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    adminFee!: bigint | undefined | null

    @Column_("text", {nullable: true})
    lpTokenTargetAddress!: string | undefined | null
}
