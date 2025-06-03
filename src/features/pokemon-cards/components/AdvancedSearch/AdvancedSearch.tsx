import { useMemo, useState } from 'react'
import { PokemonCardSubTypeEnum } from '@/features/pokemon-cards/interface/enums.ts'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover.tsx'
import { Button } from '@/shared/ui/button.tsx'
import Icon from '@/shared/components/Icon.tsx'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/shared/ui/command.tsx'
import { Check } from 'lucide-react'
import { cn } from '@/shared/lib/utils.ts'

export default function AdvancedSearch() {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState<PokemonCardSubTypeEnum | null>(null)

    const subTypes = useMemo(() => {
        return Object.values(PokemonCardSubTypeEnum)
    }, [])

    return (
        <div className="flex w-full max-w-sm gap-1">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-72 border justify-between"
                    >
                        {value ?
                            subTypes.find((subType) => subType === value) :
                            'Select subType...'}
                        <Icon iconName="chevronDown" className="opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-72 p-0">
                    <Command>
                        <CommandInput placeholder="Search subType..." className="h-9" />
                        <CommandList>
                            <CommandEmpty>No subType found.</CommandEmpty>
                            <CommandGroup>
                                {subTypes.map((subType) => (
                                    <CommandItem
                                        key={subType}
                                        value={subType}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? null : currentValue as PokemonCardSubTypeEnum)
                                            setOpen(false)
                                        }}
                                    >
                                        {subType}
                                        <Check
                                            className={cn(
                                                'ml-auto',
                                                value === subType ? 'opacity-100' : 'opacity-0',
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}