import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"

@Entity_()
export class SwapForGasFunctionExecuteMetaTransaction {
    constructor(props?: Partial<SwapForGasFunctionExecuteMetaTransaction>) {
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
    userAddress!: string | undefined | null

    @Column_("text", {nullable: true})
    functionSignature!: string | undefined | null

    @Column_("text", {nullable: true})
    sigR!: string | undefined | null

    @Column_("text", {nullable: true})
    sigS!: string | undefined | null

    @Column_("int4", {nullable: true})
    sigV!: number | undefined | null
}
