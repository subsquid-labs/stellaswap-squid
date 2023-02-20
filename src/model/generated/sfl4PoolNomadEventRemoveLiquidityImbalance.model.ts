import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class Sfl4PoolNomadEventRemoveLiquidityImbalance {
    constructor(props?: Partial<Sfl4PoolNomadEventRemoveLiquidityImbalance>) {
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

    @Column_("jsonb", {nullable: false})
    tokenAmounts!: unknown

    @Column_("jsonb", {nullable: false})
    fees!: unknown

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    invariant!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    lpTokenSupply!: bigint
}
