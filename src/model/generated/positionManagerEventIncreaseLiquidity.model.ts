import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class PositionManagerEventIncreaseLiquidity {
    constructor(props?: Partial<PositionManagerEventIncreaseLiquidity>) {
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
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    tokenId!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    liquidity!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    actualLiquidity!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amount0!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amount1!: bigint

    @Column_("text", {nullable: false})
    pool!: string
}
