export interface AbilityType {
    id: number
    name: string
    flavor_text_entries: {
        flavor_text: string
        language: {
            name: string
        }
        version_group: {
            id: number
            name: string
            order: number
        }
    }[]
}