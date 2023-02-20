import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class SflMai4PoolEventRemoveLiquidityOne {
    constructor(props?: Partial<SflMai4PoolEventRemoveLiquidityOne>) {
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

    @Index_()
    @Column_("text", {nullable: false})
    provider!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    lpTokenAmount!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    lpTokenSupply!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    boughtId!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    tokensBought!: bigint
}
