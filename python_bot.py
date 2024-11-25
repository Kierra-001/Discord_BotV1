import discord
from discord.ext import commands
import random

# Initialize bot
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="?", intents=intents)

# Ping Pong command
@bot.command()
async def lebe(ctx):
    await ctx.send("Hai!, Nandesuka?")

# Sisters command
@bot.command()
async def lebesister(ctx):
    await ctx.send("Ah... it's EX-001 or If Kierra would called it Chilia(Chi-chan)")

# Multiple other funfact commands can be added in a similar fashion
@bot.command()
async def lebefunfacts(ctx):
    funfacts = [
        "My name Lebe came from German name Leberecht maaß",
        "My name came from Z1 destroyer who namesake is Leberecht maaß...",
        "You know my name actually boys name in Germany..."
    ]
    await ctx.send(random.choice(funfacts))

# Kierra funfacts command
@bot.command()
async def kierrafunfacts(ctx):
    funfacts = [
        "Kierra has 5 waifu in-game, which is upsets me.",
        "Kierra like Azur lane because this the only game he play where he can marry a character..."
    ]
    await ctx.send(random.choice(funfacts))

# Dice roll command
@bot.command()
async def dice(ctx):
    result = random.randint(1, 6)
    await ctx.send(f"{result} Shikikan-sama")

# Kick command with permission check
@bot.command()
async def kick(ctx, member: discord.Member = None):
    if ctx.author.guild_permissions.kick_members:
        if member:
            await member.kick()
            await ctx.send(f"Kicked {member.user.username}!")
        else:
            await ctx.send("Dare ga?")
    else:
        await ctx.send("You don't have permission to kick members!")

# Ban command with permission check
@bot.command()
async def ban(ctx, member: discord.Member = None):
    if ctx.author.guild_permissions.ban_members:
        if member:
            await member.ban()
            await ctx.send(f"Banned {member.user.username}!")
        else:
            await ctx.send("Dare ga?")
    else:
        await ctx.send("You don't have permission to ban members!")

# Purge command
@bot.command()
async def purge(ctx, amount: int):
    if ctx.author.guild_permissions.manage_messages:
        await ctx.channel.purge(limit=amount)
        await ctx.send(f"Deleted {amount} messages!").delete(delay=5)
    else:
        await ctx.send("You don't have permission to manage messages!")

# Kill command (mentions a user and sends a death message)
@bot.command()
async def kill(ctx, member: discord.Member = None):
    if member:
        await ctx.send(f"{member} Died")
    else:
        await ctx.send("Dare desuka?")

# Custom embed and image commands
@bot.command()
async def introduction(ctx):
    embed = discord.Embed(title="Konichiwa, Lebe-desu", description="Watashi wa, Kierra-sama no puraibeto meido desu. Yoroshiku ne!")
    embed.set_author(name="Leberecht maaß", icon_url="https://cdn.glitch.me/41801d65-89c9-479a-99b4-f5e4f529d9cc%2Fthumbnails%2FLeberect%20Mass_20210918153837%20(2).png?1634187729515")
    embed.set_footer(text="Prototype_Maid_Swoopy")
    await ctx.send(embed=embed)

@bot.command()
async def howdoyoulook(ctx):
    image_url = "https://cdn.glitch.me/41801d65-89c9-479a-99b4-f5e4f529d9cc%2Fthumbnails%2FLeberect%20Mass_20210918153837%20(3).png?1634181689329"
    await ctx.send(image_url)

# Event for new member joining
@bot.event
async def on_member_join(member):
    if member.guild.id in ["758952958502240276", "724826049438941234"]:
        channel = discord.utils.get(member.guild.channels, id=823418417734090753)  # Example channel ID
        if channel:
            await channel.send(f"Irasshaimasen {member}!")

# On bot ready event
@bot.event
async def on_ready():
    activity = discord.Game("On Development")
    await bot.change_presence(activity=activity, status=discord.Status.dnd)
    print(f"Logged in as {bot.user}")

# Run the bot
bot.run("ODcyNDE2NjE0NTUxNzk3ODAw.Gtj1w3.-bFY_7heQfuVNyK11uc1IYMRH6rM1D0Hs_Lks0")
