import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("tenants")
export class Tenant {
  @PrimaryGeneratedColumn()
  tenantId: number; 

  @Column({ type: "varchar", length: 100, nullable: false })
  companyName: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  industry: string;

  @Column({ type: "varchar", unique: true, nullable: false })
  registrationNumber: string;

  @Column({ type: "text", nullable: true })
  address: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  country: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  state: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  city: string;

  @Column({ type: "varchar", length: 10, nullable: true })
  zipcode: string;

  @Column({ type: "varchar", length: 20, nullable: false })
  phone: string;

  @Column({ type: "varchar", length: 255, unique: true, nullable: false })
  email: string;

  @Column({ type: "text", nullable: true })
  logo: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  tenantStatus: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: "uuid", nullable: false })
  createdBy: string;

  @Column({ type: "uuid", nullable: false })
  updatedBy: string;
}
