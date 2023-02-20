import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"

@Index_(["owner", "operator"], {unique: false})
@Entity_()
export class XStellaMaiVaultEventApprovalForAll {
    constructor(props?: Partial<XStellaMaiVaultEventApprovalForAll>) {
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
    owner!: string

    @Column_("text", {nullable: false})
    operator!: string

    @Column_("bool", {nullable: false})
    approved!: boolean
}
