import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class GlmrMaiVaultEventRemovedFrontEnd {
    constructor(props?: Partial<GlmrMaiVaultEventRemovedFrontEnd>) {
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

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    promoter!: bigint
}
