export class Platform {
  private name:string
  private releaseYear:number
  private company:string
  private nBits:number
  private generation:string
  private hasHD:boolean
  private hdSize:number
  private hasInternetConnection:boolean
  private storageDevice:string
  private color:string

  constructor(name,releaseYear,company,nBits,generation,hasHD,hdSize,hasInternetConnection,storageDevice,color) {
    this.name=name
    this.releaseYear=releaseYear
    this.company=company
    this.nBits=nBits
    this.generation=generation
    this.hasHD=hasHD
    this.hdSize=hdSize
    this.hasInternetConnection=hasInternetConnection
    this.storageDevice=storageDevice
    this.color=color

}

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getReleaseYear(): number {
        return this.releaseYear;
    }

    public setReleaseYear(releaseYear: number): void {
        this.releaseYear = releaseYear;
    }

    public getCompany(): string {
        return this.company;
    }

    public setCompany(company: string): void {
        this.company = company;
    }

    public getNBits(): number {
        return this.nBits;
    }

    public setNBits(nBits: number): void {
        this.nBits = nBits;
    }

    public getGeneration(): string {
        return this.generation;
    }

    public setGeneration(generation: string): void {
        this.generation = generation;
    }

    public getHasHD(): boolean {
        return this.hasHD;
    }

    public setHasHD(hasHD: boolean): void {
        this.hasHD = hasHD;
    }

    public getHdSize(): number {
        return this.hdSize;
    }

    public setHdSize(hdSize: number): void {
        this.hdSize = hdSize;
    }

    public getHasInternetConnection(): boolean {
        return this.hasInternetConnection;
    }

    public setHasInternetConnection(hasInternetConnection: boolean): void {
        this.hasInternetConnection = hasInternetConnection;
    }

    public getStorageDevice(): string {
        return this.storageDevice;
    }

    public setStorageDevice(storageDevice: string): void {
        this.storageDevice = storageDevice;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    igualPlatfor(plataforma:Platform):Boolean{
        let bool = false
        if(this.name == plataforma.getName()){
            if(this.releaseYear==plataforma.getReleaseYear()){
                if(this.company==plataforma.getCompany()){
                    if(this.nBits==plataforma.getNBits()){
                        if (this.generation==plataforma.getGeneration()) {
                            if (this.hasHD==plataforma.getHasHD()) {
                                if (this.hdSize==plataforma.getHdSize()) {
                                    if (this.hasInternetConnection==plataforma.getHasInternetConnection()) {
                                        if (this.storageDevice==plataforma.getStorageDevice()) {
                                            if (this.color==plataforma.getColor()) {
                                                bool=true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return bool

    }
}
// this.name=name
// this.releaseYear=releaseYear
// this.company=company
// this.nBits=nBits
// this.generation=generation
// this.hasHD=hasHD
// this.hdSize=hdSize
// this.hasInternetConnection=hasInternetConnection
// this.storageDevice=storageDevice
// this.color=color