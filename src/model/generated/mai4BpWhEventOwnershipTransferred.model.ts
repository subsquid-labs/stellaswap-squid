import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"

@Index_(["previousOwner", "newOwner"], {unique: false})
@Entity_()
export class Mai4BpWhEventOwnershipTransferred {
    constructor(props?: Partial<Mai4BpWhEventOwnershipTransferred>) {
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
    previousOwner!: string

    @Column_("text", {nullable: false})
    newOwner!: string
}
