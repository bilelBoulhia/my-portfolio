"use client"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/Card"
interface CodeSnippetProps {
    code: string
    language?: string
    title?: string
    className?: string
}
export function CodeSnippet({ code, language, title, className }: CodeSnippetProps) {

    return (
        <div className='overflow-hidden flex justify-center  '>
            <Card className={cn("overflow-hidden w-[80vw] border-neutral-800 bg-black", className)}>
            <CardHeader className="flex flex-row items-center justify-between bg-neutral-900 py-2 px-4 border-b border-neutral-800">
                <CardTitle className="text-sm font-medium text-neutral-300">
                    {title || (language ? `${language} code` : "Code snippet")}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
        <pre className="overflow-x-auto bg-black max-h-[300px] p-4 text-sm text-neutral-300">
          <code className={`language-${language} `}>{code}</code>
        </pre>
            </CardContent>
        </Card>
        </div>
    )
}
