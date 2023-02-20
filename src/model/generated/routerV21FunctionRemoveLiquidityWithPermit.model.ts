import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class RouterV21FunctionRemoveLiquidityWithPermit {
    constructor(props?: Partial<RouterV21FunctionRemoveLiquidityWithPermit>) {
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

    @Column_("text", {nullable: true})
    tokenA!: string | undefined | null

    @Column_("text", {nullable: true})
    tokenB!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    liquidity!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    amountAMin!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    amountBMin!: bigint | undefined | null

    @Column_("text", {nullable: true})
    to!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    deadline!: bigint | undefined | null

    @Column_("bool", {nullable: true})
    approveMax!: boolean | undefined | null

    @Column_("int4", {nullable: true})
    v!: number | undefined | null

    @Column_("text", {nullable: true})
    r!: string | undefined | null

    @Column_("text", {nullable: true})
    s!: string | undefined | null
}
