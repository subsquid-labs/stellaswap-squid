import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Index_(["txHash", "target"], {unique: false})
@Entity_()
export class StellaTimelockEventQueueTransaction {
    constructor(props?: Partial<StellaTimelockEventQueueTransaction>) {
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

    @Column_("text", {nullable: false})
    txHash!: string

    @Column_("text", {nullable: false})
    target!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    value!: bigint

    @Column_("text", {nullable: false})
    signature!: string

    @Column_("text", {nullable: false})
    data!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    eta!: bigint
}
